import { ResizablePanel } from "../../../@/components/ui/resizable";
import { Slider } from "../../../@/components/ui/slider";
import WaveSurfer from "wavesurfer.js";
import Tools_timeline from "../timeline_tools";
import { useEffect, useRef } from "react";

const BottomTimeline = ({ audioUrl }) => {
  const waveformRef = useRef(null);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "violet",
      progressColor: "purple",
      cursorColor: "navy",
    });
    wavesurfer.load(audioUrl);
    return () => {
      wavesurfer.destroy();
    };
  }, [audioUrl]);

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
      <div
        style={{
          border: "0.5px solid #14b876",
          height: "8vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Slider
          defaultValue={[33]}
          max={100}
          step={1}
          style={{ height: "100%", width: "15%" }}
        />
        <Tools_timeline />
        <Tools_timeline />
      </div>
      <div
        style={{
          border: "0.5px solid #2711d1",
          height: "85%",
          width: "100%",
          display: "grid",
          gridTemplateRows: "18% 45% 45%",
        }}
      >
        <div style={{}}>Timing</div>
        <div
          style={{
            border: "1px solid #ded70b",
            width: "100%",
            position: "absolute",
          }}
        >
          <div ref={waveformRef}></div>
        </div>
      </div>
    </ResizablePanel>
  );
};
export default BottomTimeline;
