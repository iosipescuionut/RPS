import { FC, ButtonHTMLAttributes, MouseEventHandler } from "react";
import { ScoreButtonStyle } from "../ScoreArea/ScoreArea.style";

type ScoreButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ScoreButton: FC<ScoreButtonProps> = ({ onClick, children, ...rest }) => {
  return (
    <ScoreButtonStyle onClick={onClick} {...rest}>
      {children}
    </ScoreButtonStyle>
  );
};

export default ScoreButton;
