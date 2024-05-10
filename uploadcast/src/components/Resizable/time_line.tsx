import React from "react";
import { ResizablePanel } from "../../../@/components/ui/resizable";

function BottomTimeline() {
  return (
    <ResizablePanel
      defaultSize={9}
      maxSize={55}
      minSize={19}
      className="customResize"
      style={{
        borderTop: "1px solid #007bff",
        width: "100%",
      }}
    >
      <div className="flex h-full items-center justify-center p-6"></div>
    </ResizablePanel>
  );
}
export default BottomTimeline;
