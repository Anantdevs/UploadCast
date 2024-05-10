import React, { useState } from "react";
import "../App.css"; // Import your CSS file
const Timeline = () => {
  const [isBorderHovered, setIsBorderHovered] = useState(false);
  const [border_wid, setBorderWid] = useState(2);
  const [isDrag, setIsDrag] = useState(false);

  const [dynamicHeight, setDynamicHeight] = useState(9.99);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const screenHeight = window.innerHeight;
    const cursorHeightFromBottom = screenHeight - e.clientY;

    const isOnBorder =
      x <= border_wid + 1 ||
      x >= rect.width - border_wid - 1 ||
      y <= border_wid + 1 ||
      y >= rect.height - border_wid - 1;
    setIsBorderHovered(isOnBorder);

    if (isDrag) {
      setDynamicHeight(15);
    }

    if (isOnBorder) {
      setBorderWid(5);
    }
    if (e.buttons === 1 && isOnBorder) {
      setIsDrag(true);
      // alert("Mouse button is pressed");
    } else {
      setIsDrag(false);
    }
  };
  const handleMouseLeave = () => {
    setBorderWid(2);
    setIsBorderHovered(false);
  };

  return (
    <div
      className={`timeline ${isBorderHovered ? "border-hovered" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: 1, display: "flex", height: `${dynamicHeight}vh` }}
    >
      Timeline
    </div>
  );
};

export default Timeline;
