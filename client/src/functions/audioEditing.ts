// audioEditing.ts

import WaveSurfer from "wavesurfer.js";

export function cutAudio(wavesurfer: WaveSurfer): void {
  const regions = wavesurfer.regions.list;
  const selection = Object.values(regions).find((region) =>
    region.containsTime(wavesurfer.getCurrentTime())
  );

  if (selection) {
    const startTime = selection.start;
    const endTime = selection.end;
    wavesurfer.backend.buffer = wavesurfer.backend.buffer.slice(
      0,
      startTime * wavesurfer.backend.ac.sampleRate
    );
    wavesurfer.backend.buffer = wavesurfer.backend.buffer.concat(
      wavesurfer.backend.buffer.slice(
        endTime * wavesurfer.backend.ac.sampleRate
      )
    );
    wavesurfer.empty();
    wavesurfer.load(wavesurfer.backend.buffer);
    selection.remove();
  } else {
    console.log("No selection found.");
  }
}
