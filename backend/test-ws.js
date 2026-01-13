const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:3000");

ws.on("open", () => {
  console.log("Connected to backend");

  // Send a test Python code
  ws.send(JSON.stringify({
    language: "python",
    code: "print(10+20)",
    stdin: ""
  }));
});

ws.on("message", (msg) => {
  console.log("Received:", msg.toString());
});
