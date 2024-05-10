import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../@/components/ui/resizable";

function TimeLine() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] max-w-md rounded-lg border customResize"
      style={{ position: "absolute" }}
    >
      <ResizablePanel
        defaultSize={40}
        className="customResize"
        style={{
          // border: "1px solid #007bff",
          width: "67.4%",
          left: "50vh",
          position: "relative",
        }}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        defaultSize={9}
        maxSize={55}
        minSize={19}
        className="customResize"
        style={{ borderTop: "1px solid #007bff" }}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">TimeLine</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
export default TimeLine;
