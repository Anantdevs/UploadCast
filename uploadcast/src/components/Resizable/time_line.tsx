import { useEffect, useRef, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tools_timeline from "../timeline_tools";
import { ResizablePanel } from "../../../@/components/ui/resizable";
import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline.esm.js";
import Hover from "wavesurfer.js/dist/plugins/hover.esm.js";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.esm.js";
import {
  faMicrophone,
  faPause,
  faPlay,
  faScissors,
} from "@fortawesome/free-solid-svg-icons";

const BottomTimeline = ({ audioUrl }) => {
  const [play, setPlay] = useState(false);
  const [playTime, setPlayTime] = useState(0);
  const [time, setTime] = useState(0);
  const [mixpxsec, setMixpxsec] = useState(100);
  const [points, setPoints] = useState([5, 10]);
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);

  const handleSliderChange = (newValue) => {
    setMixpxsec(newValue);
    if (wavesurferRef.current) {
      wavesurferRef.current.zoom(newValue);
    }
  };

  const formatTime = (seconds) =>
    [seconds / 60, seconds % 60]
      .map((v) => `0${Math.floor(v)}`.slice(-2))
      .join(":");

  useEffect(() => {
    if (!wavesurferRef.current) {
      wavesurferRef.current = WaveSurfer.create({
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

      const wsRegions = wavesurferRef.current.registerPlugin(
        RegionsPlugin.create()
      );
      wavesurferRef.current.load(audioUrl);

      wavesurferRef.current.on("audioprocess", () => {
        setTime(wavesurferRef.current.getCurrentTime());
        setPlayTime(wavesurferRef.current.getCurrentTime());
      });

      wavesurferRef.current.once("decode", () => {
        wsRegions.addRegion({
          start: points[0],
          end: points[1],
          color: "rgba(255, 0, 0, 0.1)",
          resize: true,
        });
      });
    } else {
      wavesurferRef.current.load(audioUrl);
    }

    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
        wavesurferRef.current = null;
      }
    };
  }, [audioUrl, points]);

  useEffect(() => {
    if (wavesurferRef.current) {
      if (play) {
        wavesurferRef.current.play();
      } else {
        wavesurferRef.current.pause();
      }
    }
  }, [play]);

  return (
    <ResizablePanel
      defaultSize={19}
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
          callback={setPlay}
          icon1={faPlay}
          icon2={faPause}
          iconText1={"  Play"}
          iconText2={"  Pause"}
        />
        <Tools_timeline
          callback={setPlay}
          icon1={faMicrophone}
          icon2={faScissors}
          iconText1={"  VoiceOver"}
          iconText2={"  Crop"}
        />
      </div>
      <div>
        <p>Current time: {formatTime(time)}</p>
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
