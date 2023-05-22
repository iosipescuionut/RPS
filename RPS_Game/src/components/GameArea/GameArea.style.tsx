import styled from "styled-components";
import {
  FaRegHandScissors,
  FaRegHandRock,
  FaRegHandPaper,
} from "react-icons/fa";

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

export const Results = styled.div`
  color: var(--gray);
  text-align: center;
  padding: var(--padding) calc(var(--padding) * 1.5);
  background: rgb(46, 43, 233);
  background: linear-gradient(
    0deg,
    rgba(46, 43, 233, 1) 0%,
    rgba(120, 87, 255, 1) 100%
  );
  border-radius: 0 0 var(--border-radius) var(--border-radius);

  /*grid flow */
  display: grid;
  align-content: start;
  /* if condition - throw props 1 - 2 if large prop is passed*/
  gap: 2rem;

  @media (min-width: 600px) {
    border-radius: var(--border-radius);
  }
`;

//
export const GridFlow = styled.div`
  display: grid;
  align-content: start;
  gap: 1rem;
  padding: var(--padding);
`;

export const GameAreaTitle = styled.h1`
  font-weight: var(--fw-bold);
  font-size: var(--fs-600);
`;

export const CircleElement = styled.p`
  display: grid;
  place-content: center;
  width: 12rem;
  margin-inline: auto;
  background: rgb(46, 43, 233);
  background: linear-gradient(
    0deg,
    rgba(46, 43, 233, 0) 0%,
    rgba(78, 33, 202, 1) 100%
  );
  aspect-ratio: 1 / 1;
  border-radius: 50%;

  span {
    display: block;
    font-size: var(--fs-900);
    font-weight: var(--fw-black);
    line-height: 1;
    color: var(--gray);
  }
`;

export const ResultRank = styled.p`
  color: var(--gray);
  font-size: var(--fs-700);
  font-weight: var(--fw-bold);
`;

export const BattleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PlayerBox = styled.div`
  width: 20%;
  font-size: 35px;
`;

export const Weapon = styled.div`
  height: 125px;
  width: 125px;
  font-size: 50px;
  color: var(--text);
  background-color: var(--gray-light);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const WeaposContainer = styled.div`
  display: flex;
  padding: var(--padding);
  gap: 3rem;
`;
