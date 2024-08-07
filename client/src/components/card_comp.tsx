import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./card";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface CardCompProps {
  isVis: boolean;
  callThisFromCardComponent: (file: File) => void; // Example type for callback function
  changeBlur: () => void; // Example type for changeBlur function
}

const CARD_COMP: React.FC<CardCompProps> = ({
  isVis,
  callThisFromCardComponent,
  changeBlur,
}) => {
  return (
    <div>
      <div className={`card-upload ${isVis ? "" : "upd_card_close"}`}>
        <div>
          <Card
            title="Audio Editor"
            content="click to browse, or drag & drop a file here"
            imageUrl="https://example.com/image.jpg"
            callback={callThisFromCardComponent}
            closeCard={changeBlur}
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="upd_card_close"
            onClick={changeBlur}
          />
        </div>
      </div>
    </div>
  );
};

export default CARD_COMP;
