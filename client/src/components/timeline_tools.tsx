import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useEffect, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core"; // Import IconProp type if using Font Awesome

interface Props {
  icon1: IconProp; // Assuming icon1 is an IconProp type from FontAwesome
}
function Tools_timeline({ icon1 }: Props) {
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
