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
      <div style={{ border: "0.5px solid #14b876", height: "8vh" }}>
        {" "}
        Tools place
      </div>
      <div
        style={{
          border: "0.5px solid #2711d1",
          height: "85%",
          width: "100%",
          // justifyContent: "stretch",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          display: "grid",
          gridTemplateRows: "18% 45% 45%",
        }}
      >
        <div
          style={
            {
              // height: "20%"
            }
          }
        >
          Timing
        </div>
        <div
          style={{
            border: "1px solid #ded70b",
            // height: "40%",
            width: "100%",
          }}
        ></div>
      </div>
    </ResizablePanel>
  );
}
export default BottomTimeline;
