import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconProps {
  icon: IconDefinition; // Define the type for the icon prop
}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <span style={{ display: "block" }}>
      <FontAwesomeIcon icon={props.icon} />
    </span>
  );
};
export default Icon;
