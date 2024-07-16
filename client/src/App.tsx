import { useState } from "react";
import "./App.css";
import EditScreen from "./screens/editor_screen";
import CardComponent from "./components/card_comp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./landing_site/landing_page";

function App() {
  const [blurAmount, setBlurAmount] = useState<number>(5);
  const [isVis, setIsVis] = useState<boolean>(true);
  const [audioFile, setAudioFile] = useState<string | null>(null);

  const callThisFromCardComponent = (file: File) => {
    const audioURL = URL.createObjectURL(file);
    console.log(`Child passed in ${audioURL}`);
    setAudioFile(audioURL);
  };

  const callThisFromEditScreen = (file: File) => {
    const audioURL = URL.createObjectURL(file);
    console.log(`Child passed in ${audioURL}`);
    setAudioFile(audioURL);
  };

  const changeBlur = () => {
    setBlurAmount(0);
    setIsVis(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/main_project"
          element={
            <div className="stack-container">
              <div style={{ filter: `blur(${blurAmount}px)` }}>
                <EditScreen
                  callback={callThisFromEditScreen}
                  audioFile={audioFile}
                />
              </div>
              <div>
                {isVis && (
                  <CardComponent
                    isVis={isVis}
                    callThisFromCardComponent={callThisFromCardComponent}
                    changeBlur={changeBlur}
                  />
                )}
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
