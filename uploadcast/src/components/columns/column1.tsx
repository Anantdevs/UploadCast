import {
  faBurger,
  faGears,
  faSearch,
  faMicrophone,
  faFont,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../icon-options";

function Column1() {
  return (
    <div className="column1">
      <Icon icon={faBurger} />
      <Icon icon={faSearch} />
      <Icon icon={faGears} />
      <Icon icon={faMicrophone} />
      <Icon icon={faFont} />
    </div>
  );
}
export default Column1;
{
  /* <FontAwesomeIcon icon={faSearchengin} /> */
}
