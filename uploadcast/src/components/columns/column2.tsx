import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ScrollArea } from "../../../@/components/ui/scroll-area";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function Column2() {
  const onDrop = useCallback(() => {}, []);
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
  return (
    <ScrollArea className="rounded-md border column2">
      Add media
      <div>
        <div
          {...getRootProps()}
          className="card-content"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          <FontAwesomeIcon icon={faCloudArrowUp} />:
          <span style={{ display: "block" }}>Upload a file</span>
          <span style={{ display: "block" }}>
            Create to browse, or drag & drop a file here
          </span>
        </div>
      </div>
    </ScrollArea>
  );
}
export default Column2;
