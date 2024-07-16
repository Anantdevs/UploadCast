import React, { useCallback } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
  callback: FileCallback;
  closeCard: Function;
}
const Card: React.FC<CardProps> = ({ title, content, callback, closeCard }) => {
  const onDrop = useCallback((acceptedFiles) => {
    closeCard();
    callback(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
    <div className="card ">
      <h2 className="w-full h-[14%] flex items-center justify-center">
        {title}
      </h2>
      <div {...getRootProps()} className="card-content">
        <input {...getInputProps()} />
        {isDragActive ? (
          <div>
            <p>DROP THE FILE HERE </p>
            <span style={{ paddingRight: "10px" }}>
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </span>
          </div>
        ) : (
          <div className="flex w-full h-full flex-col items-center justify-center">
            <button className="btn-upd">
              <span style={{ paddingRight: "10px" }}>
                <FontAwesomeIcon icon={faCloudArrowUp} />
              </span>
              Upload a File
            </button>
            <p className="card-text">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
