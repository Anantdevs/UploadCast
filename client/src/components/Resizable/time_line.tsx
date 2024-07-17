import { useCallback, useEffect, useRef, useState } from "react";
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
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDropzone } from "react-dropzone";

const BottomTimeline = ({ audioUrl }: { audioUrl: string }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      URL.createObjectURL(acceptedFiles[0]);
    } else {
      console.log("No files accepted.");
    }
  }, []);
  const { getRootProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "audio/*": [
        ".mp3",
        ".wav",
        ".webm",
        ".flac",
        ".m4a",
        ".mp4",
        ".mpeg",
        ".webm",
      ],
    },
  });

  // state variables

  const [play, setPlay] = useState<boolean>(false);
  const [icon, setIcon] = useState(faPlay);
  const [time, setTime] = useState(0);
  const points = [5, 10];
  const [spacebarPressed, setSpacebarPressed] = useState(false);

  // Ref variables

  const waveformRef = useRef(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null); // Use WaveSurfer type or null

  //functions

  const handleSliderChange = (newValue: number | number[]) => {
    // if (typeof newValue === "number") {
    //   setMixpxsec(newValue);
    // }
    if (wavesurferRef.current && typeof newValue === "number") {
      wavesurferRef.current.zoom(newValue);
    }
  };

  const formatTime = (seconds: number) =>
    [seconds / 60, seconds % 60]
      .map((v) => `0${Math.floor(v)}`.slice(-2))
      .join(":");

  const playPauseButton = () => {
    setPlay(!play);
    if (icon == faPlay) {
      setIcon(faPause);
    } else {
      setIcon(faPlay);
    }
  };

  //adding hover on key down

  const handleKeyPress = (event: KeyboardEvent) => {
    const divElement = document.getElementById("play_pause");

    if (event.keyCode === 32) {
      setSpacebarPressed(true);
      setPlay((prevPlaying) => !prevPlaying);
      setTimeout(() => setSpacebarPressed(false), 600);
      divElement?.click();
    }
  };
  //USEFFECT 1
  useEffect(() => {
    if (!wavesurferRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        container: waveformRef.current!,
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

      const wsRegions = wavesurferRef.current?.registerPlugin(
        RegionsPlugin.create()
      );

      wavesurferRef.current?.load(audioUrl);

      wavesurferRef.current?.on("audioprocess", () => {
        setTime(wavesurferRef.current!.getCurrentTime());
        // setPlayTime(wavesurferRef.current!.getCurrentTime());
      });

      wavesurferRef.current?.once("decode", () => {
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
  }, [audioUrl]);

  //USEFFECT 2

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    if (wavesurferRef.current) {
      if (play) {
        wavesurferRef.current.play();
      } else {
        wavesurferRef.current.pause();
      }
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [play]);

  return (
    <ResizablePanel
      defaultSize={10} //maxsize-minsize
      maxSize={55}
      minSize={31}
      className="customResize z-[100]"
      style={{
        borderTop: "1px solid #007bff",
        width: "100%",
      }}
    >
      <div
        style={{
          height: "8vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "15px",
        }}
      >
        <Slider
          className="slider_tl"
          style={{ width: "10%", marginLeft: "10px" }}
          defaultValue={100}
          min={40}
          aria-label="Default"
          onChange={handleSliderChange}
        />
        {/*//////////////////////////////////TOOLS SECTION//////////////////////////////////////////*/}

        {/* ////////// ICON 1 AND THE BACKGROUND STYLING START////////// */}
        <div
          className="tools_timeline"
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="tools_bg "
            style={{
              position: "absolute",
              top: -32,
              left: -40,
              borderRadius: "50%",
              height: "50px",
              width: "50px",
            }}
          ></div>
          <div style={{ position: "absolute", top: -20, left: -20 }}>
            <Tools_timeline icon1={faMicrophone} />
          </div>
        </div>
        {/* ////////// ICON 2 AND THE BACKGROUND STYLING START////////// */}

        <div
          className={`tools_timeline ${
            spacebarPressed ? "spacebar-hover" : ""
          }`}
          id="play_pause"
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={playPauseButton}
        >
          <div
            className="tools_bg"
            style={{
              position: "absolute",
              top: -32,
              left: -40,
              borderRadius: "50%",
              height: "50px",
              width: "50px",
            }}
          ></div>
          <div style={{ position: "absolute", top: -20, left: -20 }}>
            <Tools_timeline icon1={icon} />
          </div>
        </div>

        {/* ////////// ICON 3 AND THE BACKGROUND STYLING START////////// */}
        <div
          className="tools_timeline"
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="tools_bg"
            style={{
              position: "absolute",
              top: -32,
              left: -40,
              borderRadius: "50%",
              height: "50px",
              width: "50px",
            }}
          ></div>
          <div style={{ position: "absolute", top: -20, left: -22 }}>
            <Tools_timeline icon1={faScissors} />
          </div>
        </div>
        <span></span>
      </div>
      <div>
        <p>Current time: {formatTime(time)}</p>
      </div>
      <div
        style={{
          border: "0.5px solid #2711d1",
          height: "100%",
          width: "100%",
          display: "grid",
          gridTemplateRows: "18% 45% 45%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "14%",
            position: "absolute",
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
            ...(audioUrl ? getRootProps() : {}),
          }}
        >
          {/* INSIDE  */}
          <div
            ref={waveformRef}
            className="default_name"
            style={{
              backgroundColor: audioUrl ? "" : "lightgrey",
              height: "100%",
              width: !audioUrl ? "90%" : "100%",
              marginTop: "4%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
            // onClick={CARD_COMP}
          >
            {!audioUrl ? (
              <span style={{ fontSize: "12px" }}>
                <FontAwesomeIcon icon={faAdd} style={{ marginRight: "15" }} />
                <span>Add media to this project</span>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </ResizablePanel>
  );
};

export default BottomTimeline;
