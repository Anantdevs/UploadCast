import { useState } from "react";
import "./App.css";
import EditScreen from "./screens/editor_screen";
import Card from "./components/card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function App() {
  const [blurAmount, setBlurAmount] = useState<number>(5);
  const [isVis, setisVis] = useState<boolean>(true);

  function changeBlur() {
    setBlurAmount(0);
    setisVis(false);
  }
  return (
    <div className="stack-container" style={{ width: "100vw" }}>
      <div style={{ filter: `blur(${blurAmount}px)` }}>
        <EditScreen />
      </div>

      <div>
        {isVis ? (
          <div className="card-upload">
            <div>
              <Card
                title="Audio Editor"
                content="click to browse, or drag & drop a file here"
                imageUrl="https://example.com/image.jpg"
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="upd_card_close"
                onClick={changeBlur}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
