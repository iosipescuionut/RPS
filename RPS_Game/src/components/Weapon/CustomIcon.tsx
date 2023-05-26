import { ReactNode } from "react";
import {
  CustomPaperIcon,
  CustomRockIcon,
  CustomScissorsIcon,
  CustomQuestionIcon,
} from "./Weapons.style";

const CustomIcon = ({ ...props }) => {
  const { choice } = props;

  let icon: ReactNode;
  switch (choice) {
    case "rock":
      icon = <CustomRockIcon />;
      break;
    case "paper":
      icon = <CustomPaperIcon />;
      break;
    case "scissors":
      icon = <CustomScissorsIcon />;
      break;
    default:
      icon = <CustomQuestionIcon />;
  }
  return <>{icon}</>;
};

export default CustomIcon;
