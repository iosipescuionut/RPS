import styled, { css } from "styled-components";
import {
  FaRegHandScissors,
  FaRegHandRock,
  FaRegHandPaper,
  FaQuestion,
} from "react-icons/fa";
// import { GameWeapons } from "../GameArea/GameArea";

type SelectedWeapon = {
  selected: string;
};

const iconStyles = `
  color: var(--text);
`;

export const CustomScissorsIcon = styled(FaRegHandScissors)`
  ${iconStyles}
`;
export const CustomRockIcon = styled(FaRegHandRock)`
  ${iconStyles}
`;
export const CustomPaperIcon = styled(FaRegHandPaper)`
  ${iconStyles}
`;
export const CustomQuestionIcon = styled(FaQuestion)`
  ${iconStyles}
`;

export const weapon = css`
  height: 125px;
  width: 125px;
  font-size: 50px;
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: var(--gray-light);
`;

export const WeaponItem = styled.div<SelectedWeapon>`
  ${weapon}
  background-color: ${({ selected }) =>
    selected ? "var(--red-ligth)" : "var(--gray-light)"};
`;

export const WeaposContainer = styled.div`
  display: flex;
  padding: var(--padding);
  gap: 3rem;
`;
