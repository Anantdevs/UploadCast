import { useState } from "react";
import "./App.css";
import EditScreen from "./screens/editor_screen";
import Card from "./components/card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [blurAmount, setBlurAmount] = useState<number>(5);
  const [isVis, setisVis] = useState<boolean>(true);
  const [audioFile, setAudioFile] = useState<string | null>(null); // State to store the audio file

  const callThisFromCardComponent = (file: File) => {
    const audiURL = URL.createObjectURL(file);
    console.log(`Child passed in ${audiURL}`);
    setAudioFile(audiURL);
  };

  function changeBlur() {
    setBlurAmount(0);
    setisVis(false);
  }
  return (
    <div className="stack-container" style={{ width: "100vw" }}>
      <div style={{ filter: `blur(${blurAmount}px)` }}>
        <EditScreen audioFile={audioFile} />
      </div>
      <div>
        {isVis ? (
          <div className="card-upload">
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
        ) : null}
      </div>
    </div>
  );
}

export default App;
