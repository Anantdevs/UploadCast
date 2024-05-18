import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

function Tools_timeline({ icon1, icon2, iconText1, iconText2, callback }) {
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    console.log("Play on childs Component" + play);
    callback(play);
  }, [play]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "12%",
        justifyContent: "space-around",
      }}
    >
      <div>
        <FontAwesomeIcon icon={icon1} onClick={() => setPlay(true)} />
        {iconText1}
      </div>
      <div>
        <FontAwesomeIcon icon={icon2} onClick={() => setPlay(false)} />
        {iconText2}
      </div>
    </div>
  );
}
export default Tools_timeline;
