import { ResizablePanel } from "../../../@/components/ui/resizable";
import React, { useState } from "react";

function MonitorScreen({ mediaUrl }) {
  // Destructure mediaUrl from props
  const [width, setWidth] = useState("85%");
  const [height, setHeight] = useState("80%");

  const handleResize = (newSize) => {
    setWidth(`${newSize}%`);
    setHeight(`${(newSize * 9) / 16}`);
  };

  // Check if mediaUrl is provided and it's a video
  // const isVideo =
  //   mediaUrl && mediaUrl.type && mediaUrl.type.startsWith("video/");

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
        style={{
          backgroundColor: "black",
          width: width,
          height: height,
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Conditionally render the video if mediaUrl is a video */}
      </div>
    </ResizablePanel>
  );
}

export default MonitorScreen;
