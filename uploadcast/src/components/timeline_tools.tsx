import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useEffect, useState } from "react";

function Tools_timeline({ icon1 }) {
  // const [play, setPlay] = useState<boolean>(false);
  // useEffect(() => {
  //   console.log("Play on childs Component" + play);
  //   callback(play);
  // }, [play]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "12%",
        justifyContent: "space-around",
      }}
    >
      <div style={{ cursor: "pointer" }}>
        <FontAwesomeIcon icon={icon1} />
      </div>
    </div>
  );
}
export default Tools_timeline;
