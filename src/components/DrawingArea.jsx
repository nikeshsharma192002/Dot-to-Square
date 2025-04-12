import { useState } from "react";
import Dot from "./Dot";
import Line from "./Line";
import "../index.css";

const DrawingArea = () => {
  const [dots, setDots] = useState([]);

  const handleClick = (e) => {
    if (dots.length >= 4) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const newDot = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setDots([...dots, newDot]);
  };

  const handleReset = () => {
    setDots([]);
  };

  const lines = dots.map((dot, index) => {
    if (index === 0) return null;
    return <Line key={index} from={dots[index - 1]} to={dot} />;
  });

  if (dots.length === 4) {
    lines.push(<Line key="close" from={dots[3]} to={dots[0]} />);
  }

  return (
    <>
      <div className="drawing-container" onClick={handleClick}>
        <svg className={`drawing-svg ${dots.length === 4 ? "complete" : ""}`}>
          {dots.map((dot, i) => (
            <Dot key={i} x={dot.x} y={dot.y} />
          ))}
          {lines}
        </svg>
        {dots.length === 4 && (
          <div className="message">🎉 Square Completed!</div>
        )}
      </div>

      {dots.length > 0 && (
        <button className="reset-btn" onClick={handleReset}>
          🔄 Reset
        </button>
      )}
    </>
  );
};

export default DrawingArea;
