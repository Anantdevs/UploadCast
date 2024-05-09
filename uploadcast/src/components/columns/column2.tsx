import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Column2() {
  return (
    <div className="column2">
      Add media
      <div
        className="card-content"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <FontAwesomeIcon icon={faCloudArrowUp} />
        <span style={{ display: "block" }}>Upload a file</span>
        <span style={{ display: "block" }}>
          Create to browse, or drag & drop a file here
        </span>
      </div>
    </div>
  );
}
export default Column2;
