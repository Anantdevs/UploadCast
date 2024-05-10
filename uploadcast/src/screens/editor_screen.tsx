import Column2 from "../components/columns/column2";
import Column1 from "../components/columns/column1";
import Column3 from "../components/columns/column3";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../@/components/ui/resizable";
import React from "react";
function EditScreen() {
  return (
    <div className="Edit_column">
      <Column1 />
      <Column2 />
      <Column3 />
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
          defaultSize={13}
          maxSize={55}
          minSize={13}
          className="customResize"
          style={{ borderTop: "1px solid #007bff" }}
        >
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">TimeLine</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
export default EditScreen;
