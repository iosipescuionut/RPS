import styled from "styled-components";
import { BsTrophy } from "react-icons/bs";
import { RiEmotionSadLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { FaRegFlag } from "react-icons/fa";

type StyleProps = {
  result?: "win" | "lose" | "draw" | "total";
};

export const TrophyIcon = styled(BsTrophy)`
  color: var(--green);
`;
export const SadFaceIcon = styled(RiEmotionSadLine)`
  color: var(--red);
`;
export const HandsShakeIcon = styled(FaRegHandshake)`
  color: var(--purple-light);
`;
export const FlagIcon = styled(FaRegFlag)`
  color: var(--yellow);
`;

export const ListItem = styled.div<StyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ result }) => {
    switch (result) {
      case "win":
        return "var(--green-light)";
      case "lose":
        return "var(--red-ligth)";
      case "draw":
        return "var(--purple-extra-light)";
      case "total":
        return "var(--brown-light)";
      default:
        return "var(--purple-extra-light)";
    }
  }};
  svg {
    stroke: ${({ result }) => {
      switch (result) {
        case "win":
          return "var(--green)";
        case "lose":
          return "var(--red)";
        case "draw":
          return "var(--purple-light)";
        case "total":
          return "var(--yellow)";
        default:
          return "var(--purple-light)";
      }
    }};
  }
`;

export const FlexGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const ListTitle = styled.h3<StyleProps>`
  color: ${({ result }) => {
    switch (result) {
      case "win":
        return "var(--green)";
      case "lose":
        return "var(--red)";
      case "draw":
        return "var(--purple-light)";
      case "total":
        return "var(--yellow)";
      default:
        return "var(--purple-light)";
    }
  }};
  font-weight: var(--fw-bold);
`;

export const TotalScore = styled.p`
  font-weight: var(--fw-black);
  color: var(--text);
  span {
    color: var(--text-dark);
    font-weight: var(--fw-black);
  }
`;

export const ListContainer = styled.div`
  display: grid;
  align-content: start;
  gap: 1rem;
  /* we will update max-height value based on the final GameArea Component */
  max-height: 300px;
  overflow-x: scroll;
`;

export const ListContainerBox = styled.div``;

export const ScoreTitle = styled.h2`
  font-size: var(--fs-600);
  font-weight: var(--fw-bold);
  margin-bottom: 15px;
`;

export const ScoreButtonStyle = styled.button`
  color: var(--gray);
  line-height: 1;
  background: var(--btn-bg);
  padding: 1rem 2rem;
  border: 0;
  border-radius: 100vw;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background: rgb(46, 43, 233);
    background: linear-gradient(
      0deg,
      rgba(46, 43, 233, 1) 0%,
      rgba(120, 87, 255, 1) 100%
    );
  }
`;
