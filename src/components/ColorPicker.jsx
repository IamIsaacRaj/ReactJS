import { useState } from 'react'

const ColorPicker = () => {
    const [color,setColor] = useState('white'); // default color

    const colors = ["red", "blue", "green", "yellow", "pink", "purple", "black","White", "orange", "cyan", "magenta", "brown", "gray", "gold", "lime","navy", "teal", "violet", "coral", "indigo", "turquoise"];

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ color: color === "black" ? "white" : "black" }}>
        pick a Color
      </h2>
      <div>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            style={{
              backgroundColor: c,
              color: c === "black" || c === "navy" || c === "brown" || c === "indigo" ? "white" : "black",
              border: "none",
              padding: "10px 20px",
              margin: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker