//React imports
import { SetStateAction, useEffect, useRef, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

//file imports
import Tools_timeline from "../timeline_tools";

//shadcn imports
import { ResizablePanel } from "../../../@/components/ui/resizable";

//wavesurfer imports

import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline.esm.js";
import Hover from "wavesurfer.js/dist/plugins/hover.esm.js";

//FontawesomImports
import {
  faMicrophone,
  faPause,
  faPlay,
  faScissors,
} from "@fortawesome/free-solid-svg-icons";

const BottomTimeline = ({ audioUrl }) => {
  //set state
  const [play, SetPlay] = useState(false);
  const [playTime, setPlayTime] = useState(0);
  const [time, setTime] = useState(0);
  const [mixpxsec, Setmixpxsec] = useState(100);

  //child to Parent
  const callThisFromToolsComponent = (
    value: boolean | ((prevState: boolean) => boolean)
  ) => {
    SetPlay(value);
  };

  // helper dunctions
  const handleSliderChange = (newValue: SetStateAction<number>) => {
    Setmixpxsec(newValue);
  };

  const formatTime = (seconds: number) =>
    [seconds / 60, seconds % 60]
      .map((v) => `0${Math.floor(v)}`.slice(-2))
      .join(":");

  const waveformRef = useRef<HTMLDivElement>(null);

  //useref
  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "lightgrey",
      progressColor: "purple",
      cursorColor: "navy",
      minPxPerSec: 100,

      plugins: [
        TimelinePlugin.create(),
        Hover.create({
          lineColor: "#ff0000",
          lineWidth: 2,
          labelSize: "11px",
        }),
      ],
    });
    wavesurfer.load(audioUrl);
    wavesurfer.on("interaction", () => {
      SetPlay(true);
      wavesurfer.play();
      console.log(play);
    });
    if (play == true) {
      wavesurfer.setTime(playTime);
      wavesurfer.play();
    }
    if (play == false) {
      setPlayTime(time);
      wavesurfer.setTime(playTime);
    }
    wavesurfer.on("audioprocess", () => {
      setTime(wavesurfer.getCurrentTime());
      setPlayTime(wavesurfer.getCurrentTime());
    });
    wavesurfer.once("decode", () => {
      wavesurfer.setTime(playTime);
      wavesurfer.zoom(mixpxsec);
      setPlayTime(time);
    });
    return () => {
      wavesurfer.destroy();
    };
  }, [audioUrl, play, mixpxsec]);

  //jsx

  return (
    <ResizablePanel
      defaultSize={9}
      maxSize={55}
      minSize={25}
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
          alignItems: "center",
        }}
      >
        <Slider
          className="slider_tl"
          style={{ width: "10%", marginLeft: "10px" }}
          defaultValue={100}
          aria-label="Default"
          onChange={handleSliderChange}
        />
        <Tools_timeline
          callback={callThisFromToolsComponent}
          icon1={faPlay}
          icon2={faPause}
          iconText1={"  Play"}
          iconText2={"  Pause"}
        />
        <Tools_timeline
          callback={callThisFromToolsComponent}
          icon1={faMicrophone}
          icon2={faScissors}
          iconText1={"  VoiceOver"}
          iconText2={"  Crop"}
        />
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
        <div>
          <p>Current time: {formatTime(time)}</p>
        </div>
        <div
          style={{
            border: "1px solid #ded70b",
            width: "100%",
            position: "absolute",
          }}
        >
          <div ref={waveformRef} style={{ height: "100%" }}></div>
        </div>
      </div>
    </ResizablePanel>
  );
};
export default BottomTimeline;
