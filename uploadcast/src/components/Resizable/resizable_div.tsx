import React from "react";
import {
  ResizableHandle,
  ResizablePanelGroup,
} from "../../../@/components/ui/resizable";
// import BottomTimeline from "./Timeline";
import BottomTimeline from "./timeline";
import MonitorScreen from "./editing_monitor";

function TimeLine() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] max-w-md rounded-lg border customResize"
      style={{ position: "absolute" }}
    >
      <MonitorScreen />
      <ResizableHandle />
      <BottomTimeline />
    </ResizablePanelGroup>
  );
}
export default TimeLine;
