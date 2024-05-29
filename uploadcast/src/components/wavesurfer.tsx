import * as React from "react";
const { useMemo, useState, useRef } = React;
import { useWavesurfer } from "@wavesurfer/react";
import Timeline from "wavesurfer.js/dist/plugins/timeline.esm.js";

// A React component that will render wavesurfer
function WAVE_TIMELINE({ audioURL, zoom }) {
  const containerRef = useRef(null);

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 100,
    minPxPerSec: zoom,
    waveColor: "rgb(200, 0, 200)",
    progressColor: "rgb(100, 0, 100)",
    url: audioURL,
    plugins: useMemo(() => [Timeline.create()], []),
  });
  return <div ref={containerRef}></div>;
}

export default WAVE_TIMELINE;
