import { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { Button, TextInput } from "flowbite-react"; // TextInput for input box

const LANGUAGES = [
  { label: "C", value: "c", monaco: "c" },
  { label: "Python", value: "python", monaco: "python" },
  { label: "JavaScript", value: "javascript", monaco: "javascript" },
];

export default function CodeEditor() {
  const [code, setCode] = useState(`#include <stdio.h>

int main() {
    printf("Hello, DevBuddy!");
    return 0;
}`);
  const [output, setOutput] = useState("");
  const [showProblem, setShowProblem] = useState(true);
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [stdin, setStdin] = useState(""); // current input
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Connect to backend WS
    wsRef.current = new WebSocket("ws://localhost:3000");

    wsRef.current.onopen = () => {
      console.log("Connected to backend");
    };

    wsRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.stdout) setOutput((prev) => prev + data.stdout);
        if (data.stderr) setOutput((prev) => prev + data.stderr);
      } catch (e) {
        console.error("Failed to parse websocket message", e);
      }
    };

    wsRef.current.onclose = () => console.log("WebSocket closed");

    return () => {
      wsRef.current?.close();
    };
  }, []);

  // Run the program (initial run)
  const runCode = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      setOutput("Running...\n");
      wsRef.current.send(
        JSON.stringify({
          type: "run", // specify run type
          language: language.value,
          code,
        })
      );
    } else {
      setOutput("Error: WebSocket not connected.");
    }
  };

  // Send input to running program
  const sendInput = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          type: "input", // specify input type
          data: stdin + "\n", // include newline for programs like scanf/input
        })
      );
      setStdin(""); // clear input box
    } else {
      setOutput((prev) => prev + "\nError: WebSocket not connected.");
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col max-w">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <h1 className="text-lg font-semibold">Online Compiler</h1>
        <div className="flex gap-2">
          <Button size="sm" color="gray">
            Share
          </Button>
          <Button size="sm" color="blue" onClick={runCode}>
            Run
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Problem Panel */}
        <div
          className={`bg-gray-800 border-r border-gray-700 transition-all duration-300 ${
            showProblem ? "w-1/4 p-4" : "w-0 p-0 overflow-hidden"
          }`}
        >
          {showProblem && (
            <>
              <h2 className="font-semibold mb-2">Problem</h2>
              <p className="text-sm text-gray-300 mb-4">
                Print <b>Hello, DevBuddy!</b>
              </p>
              <h3 className="font-semibold mb-1">Expected Input</h3>
              <pre className="bg-black p-2 rounded text-gray-300 text-sm mb-4">
                No input
              </pre>
              <h3 className="font-semibold mb-1">Expected Output</h3>
              <pre className="bg-black p-2 rounded text-green-400 text-sm">
                Hello, DevBuddy!
              </pre>
            </>
          )}
        </div>

        {/* Editor Section */}
        <div className="flex-1 border-r border-gray-700 flex flex-col relative">
          {/* Toolbar */}
          <div className="flex items-center gap-3 px-3 py-2 bg-gray-800 border-b border-gray-700">
            <button
              onClick={() => setShowProblem(!showProblem)}
              className="bg-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-600"
            >
              {showProblem ? "❮" : "❯"}
            </button>

            <select
              value={language.value}
              onChange={(e) =>
                setLanguage(LANGUAGES.find((l) => l.value === e.target.value)!)
              }
              className="bg-gray-900 border border-gray-600 text-white text-sm rounded px-2 py-1 focus:outline-none"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          <Editor
            key={`${language.value}-${showProblem}`}
            height="100%"
            language={language.monaco}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
            }}
          />
        </div>

        {/* Output */}
        <div className="w-1/4 p-4 bg-gray-800 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold">Output</h2>
            <Button size="xs" color="gray" onClick={() => setOutput("")}>
              Clear
            </Button>
          </div>

          <pre className="bg-black p-3 rounded text-green-400 h-full overflow-auto flex-1">
            {output || "Program output will appear here"}
          </pre>

          {/* Input Box */}
          <div className="flex gap-2 mt-2">
            <TextInput
              placeholder="Enter input..."
              value={stdin}
              onChange={(e) => setStdin(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendInput();
              }}
              className="flex-1 text-black"
            />
            <Button size="sm" color="green" onClick={sendInput}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
