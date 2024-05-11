import { ResizablePanel } from "../../../@/components/ui/resizable";
import React, { useState } from "react";

function MonitorScreen() {
  const [width, setWidth] = useState("85%");
  const [height, setHeight] = useState("80%");

  const handleResize = (newSize) => {
    setWidth(`${newSize}%`);
    setHeight(`${(newSize * 9) / 16}`);
  };

  return (
    <ResizablePanel
      defaultSize={40}
      className="customResize"
      style={{
        border: "1px solid #007bff",
        width: "71.3%",
        left: "49.9vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onResize={handleResize}
    >
      <div
        id="myDiv"
        className="proj_monitor"
        style={{ width: width, height: height }}
      >
        Header
      </div>
    </ResizablePanel>
  );
}

export default MonitorScreen;
