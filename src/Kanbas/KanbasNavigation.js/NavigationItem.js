import "../../index-kanbas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = () => {
  return <FontAwesomeIcon icon="fas fa-camera-retro" />;
};

const NavigationItem = ({ name, icon, selected, onClickFunction }) => (
  <div
    className={`wd-dimension-square${
      selected == name ? "-active" : ""
    } text-center pt-3`}
    onClick={onClickFunction}
  >
    <div>
      <a
        href="profile/index.html"
        style={{ color: selected == name ? "" : "white" }}
      >
        <FontAwesomeIcon icon={icon} /> <br />
        {name}
      </a>
    </div>
  </div>
);

export default NavigationItem;
