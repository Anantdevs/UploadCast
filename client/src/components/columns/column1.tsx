import {
  faBars,
  faGears,
  faSearch,
  faMicrophone,
  faFont,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../icon-options";

function Column1() {
  return (
    <div className="column1 icons-col">
      <div style={{ marginTop: "10px" }}>
        <Icon icon={faBars} />
      </div>
      <div className="icons-col h-[80vh]">
        <Icon icon={faSearch} />
        <Icon icon={faGears} />
        <Icon icon={faMicrophone} />
        <Icon icon={faFont} />
      </div>
      <div>
        <Icon icon={faQuestion} />
      </div>
    </div>
  );
}
export default Column1;
{
  /* <FontAwesomeIcon icon={faSearchengin} /> */
}
