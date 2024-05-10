import React from "react";

import {
  ResizableHandle,
  ResizablePanelGroup,
} from "../../../@/components/ui/resizable";
import BottomTimeline from "./time_line";
import MonitorScreen from "./editing_monitor";

function TimeLine() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] max-w-md rounded-lg border customResize"
      style={{ position: "absolute", width: "94.4%" }}
    >
      <MonitorScreen />
      <ResizableHandle style={{ width: "100%" }} />
      <BottomTimeline />
    </ResizablePanelGroup>
  );
}
export default TimeLine;
