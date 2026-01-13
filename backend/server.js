const express = require("express");
const { WebSocketServer } = require("ws");
const cors = require("cors");
const { spawn } = require("child_process");
const fs = require("fs-extra");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const TEMP_DIR = path.join(__dirname, "temp");

// REST endpoint
app.get("/", (req, res) => res.send("DevBuddy Backend Running"));

// Track running processes per WS connection
const wsProcesses = new Map();

// WebSocket server
const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", (ws) => {
  console.log("New WebSocket connection");

  ws.on("message", async (message) => {
    try {
      const data = JSON.parse(message);

      // --- RUN CODE ---
      if (data.type === "run") {
        const { language, code } = data;
        const id = uuidv4();
        await fs.ensureDir(TEMP_DIR);

        let filePath, outFile, proc;

        switch (language.toLowerCase()) {
          case "python":
            filePath = path.join(TEMP_DIR, `${id}.py`);
            await fs.writeFile(filePath, code);
            proc = spawn("python3", [filePath]);
            break;

          case "javascript":
            filePath = path.join(TEMP_DIR, `${id}.js`);
            await fs.writeFile(filePath, code);
            proc = spawn("node", [filePath]);
            break;

          case "c":
            filePath = path.join(TEMP_DIR, `${id}.c`);
            outFile = path.join(TEMP_DIR, `${id}_out`);
            await fs.writeFile(filePath, code);
            proc = spawn("bash", ["-c", `gcc "${filePath}" -o "${outFile}" && "${outFile}"`]);
            break;

          default:
            ws.send(JSON.stringify({ stderr: "Unsupported language" }));
            return;
        }

        // Track this process
        wsProcesses.set(ws, { proc, filePath, outFile });

        proc.stdout.on("data", (d) => ws.send(JSON.stringify({ stdout: d.toString() })));
        proc.stderr.on("data", (d) => ws.send(JSON.stringify({ stderr: d.toString() })));

        proc.on("close", async () => {
          wsProcesses.delete(ws);
          if (filePath) await fs.remove(filePath);
          if (outFile) await fs.remove(outFile);
        });
      }

      // --- SEND INPUT ---
      else if (data.type === "input") {
        const processInfo = wsProcesses.get(ws);
        if (processInfo && processInfo.proc && !processInfo.proc.killed) {
          processInfo.proc.stdin.write(data.data); // no need to add \n if user already added
        } else {
          ws.send(JSON.stringify({ stderr: "No running program to send input to." }));
        }
      }

    } catch (err) {
      ws.send(JSON.stringify({ stderr: err.message }));
    }
  });

  ws.on("close", () => {
    const processInfo = wsProcesses.get(ws);
    if (processInfo?.proc && !processInfo.proc.killed) {
      processInfo.proc.kill();
      wsProcesses.delete(ws);
    }
  });
});

app.listen(PORT, () => console.log(`REST server running on port ${PORT}`));
