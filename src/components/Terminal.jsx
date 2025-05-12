import React, { useState, useEffect } from "react";
import './Terminal.css';

export default function Terminal() {
  const [logs, setLogs] = useState([
    "Welcome to the terminal. Type `help` to begin.",
  ]);
  const [input, setInput] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Makes the cursor blink every 500ms
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (cmd) => {
    let response;
    switch (cmd.toLowerCase()) {
      case "whoami":
        response =
          "I'm Anirban 21 y/o CSE pre-final year student — I make and break stuff and repeat....Probably pushing to main when I shouldn’t.At the end of the day, I’m just a student.... in code and in life. // TODO: fix later hehe";
        break;
      case "projects":
        response = "🔥 Chaos File | 🛠️ Fix & Break | ✍️ Console Output";
        break;
      case "blog":
        response = "Visit /blog to read my latest thoughts.";
        break;
      case "help":
        response =
          "Available commands: whoami, projects, blog, clear, get-resume, help";
        break;
      case "clear":
        setLogs([]);
        return;
      case "get-resume":
        response = (
          <span>
            📥 You can download my resume{" "}
            <a
              href="/ANI-RESUME.pdf"
              download
              style={{ color: "#00ffff", textDecoration: "underline" }}
            >
              here
            </a>
            .
          </span>
        );
        break;
      default:
        response = `Unknown command: ${cmd}`;
    }

    setLogs((prev) => [...prev, `> ${cmd}`, response]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
      setInput("");
    }
  };

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="terminal-icon">⚙️</span>
        <span>Terminal</span>
      </div>
      <div className="terminal-output">
        {logs.map((log, idx) => (
          <div key={idx} className="terminal-log">
            {typeof log === "string" ? log : log}
          </div>
        ))}
        <div className="command-line">
          <span className="prompt">$</span>{" "}
          <span className="command">{`> ${input}`}</span>
          {showCursor && <span className="cursor">|</span>}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="terminal-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          spellCheck="false"
        />
      </form>
    </div>
  );
}
