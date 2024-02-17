import randomColor from "randomcolor";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");
  const [state, setState] = useState(true);
  const [bgcolor, setBGColor] = useState("");
  const [color, setColor] = useState("");

  return (
    <div className="App" style={{ backgroundColor: bgcolor, color: color }}>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Increment Number
      </button>
      <div>{num}</div>

      <button
        onClick={() => {
          setText("Hello");
        }}
      >
        Change Text To Hello
      </button>
      <div>{text}</div>

      <button
        onClick={() => {
          setState((prev) => !prev);
        }}
      >
        Change State
      </button>

      <div>{state ? "True" : "False"}</div>

      <input
        type="text"
        onChange={(e) => setBGColor(e.target.value)}
        placeholder="Write a Color"
      />
      <hr />
      <button
        onClick={() => {
          setBGColor(randomColor());
        }}
      >
        Change BG Color Random
      </button>

      <button
        onClick={() => {
          const color = "#" + Math.round(Math.random() * (256 * 256 * 256));
          setColor(color);
        }}
      >
        Change Color Random
      </button>
    </div>
  );
}
