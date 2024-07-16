import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ScrollArea } from "../../../@/components/ui/scroll-area";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Column2 = ({ callback }) => {
  const onDrop = useCallback((acceptedFiles) => {
    callback(acceptedFiles[0]);
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
      "video/*": [".mp4", ".mkv", ".avi"],
    },
  });
  return (
    <ScrollArea className="rounded-md border column2 w-full h-[69%] overflow-auto">
      <p className="w-[full] h-10 flex justify-center items-center">
        Add media
      </p>
      <div className="w-full h-fit flex justify-center items-center">
        <div
          {...getRootProps()}
          className="card_2col flex flex-col justify-center items-center w-[90%] mt-2"
        >
          <div>
            <FontAwesomeIcon icon={faCloudArrowUp} />
            <span>Upload a file</span>
          </div>
          <div>Create to browse, or drag & drop a file here</div>
        </div>
      </div>
    </ScrollArea>
  );
};
export default Column2;
