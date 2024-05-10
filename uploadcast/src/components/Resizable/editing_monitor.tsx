import React from "react";
import { ResizablePanel } from "../../../@/components/ui/resizable";

function MonitorScreen() {
  return (
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
  );
}
export default MonitorScreen;
