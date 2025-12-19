import React, { useState } from "react";

const COLORS = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#9D4EDD"];

export default function Tags() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div style={containerStyle}>
      {COLORS.map((color, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          style={{
            ...circleStyle,
            backgroundColor: color,
            transform: activeIndex === index ? "scale(1.15)" : "scale(1)",
            boxShadow:
              activeIndex === index
                ? "0 0 0 3px rgba(0,0,0,0.15)"
                : "none",
          }}
          aria-label={`Tag ${index + 1}`}
        />
      ))}
    </div>
  );
}

const containerStyle = {
  display: "flex",
  gap: "12px",
  padding: "10px 14px",
  borderRadius: "999px",
  backgroundColor: "#f2f2f2",
  alignItems: "center",
  width: "fit-content",
};

const circleStyle = {
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};