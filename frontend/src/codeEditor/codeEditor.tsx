import Editor from "@monaco-editor/react";
import { useState } from "react";




export default function CodeEditor() {
  const [code, setCode] = useState(
    `print("Hello DevBuddy 🚀")`
  );

  return (
    <Editor
      height="60vh"
      language="python"
      theme="vs-dark"
      value={code}
      onChange={(value: any) => setCode(value || "")}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
      }}
    />
  );
}