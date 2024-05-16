import { faMicrophone, faScissors } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tools_timeline() {
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
        <FontAwesomeIcon icon={faScissors} />
        Split
      </div>
      <div>
        <FontAwesomeIcon icon={faMicrophone} />
        voiceover
      </div>
    </div>
  );
}
export default Tools_timeline;
