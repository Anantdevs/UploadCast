import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
}
const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div
        className="card-content"
        style={{ width: "40rem ", height: "8rem", paddingTop: "55px" }}
      >
        <button className="btn-upd">
          <span style={{ paddingRight: "10px" }}>
            <FontAwesomeIcon icon={faCloudArrowUp} />
          </span>
          Upload a File
        </button>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Card;
