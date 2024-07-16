import React from "react";

import {
  ResizableHandle,
  ResizablePanelGroup,
} from "../../../@/components/ui/resizable";
import BottomTimeline from "./time_line";
import MonitorScreen from "./editing_monitor";

function TimeLine({ audioFile }) {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] rounded-lg border customResize"
      style={{ position: "absolute", width: "94.4%" }}
    >
      <MonitorScreen mediaUrl={audioFile} />
      <ResizableHandle style={{ width: "100%" }} />
      <BottomTimeline audioUrl={audioFile} />
    </ResizablePanelGroup>
  );
}
export default TimeLine;
