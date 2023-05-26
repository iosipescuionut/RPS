import styled from "styled-components";
import { weapon } from "../Weapon/Weapons.style";

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
  display: grid;
  align-content: start;
  gap: 2rem;

  @media (min-width: 600px) {
    border-radius: var(--border-radius);
  }
`;

export const WeaponGame = styled.div`
  ${weapon}
  display: flex;
  flex-direction: column;
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
  min-height: 32px;
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
  width: 100%;
  font-size: 35px;
  margin-bottom: 20px;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const WeaponLabel = styled.span`
  font-size: 20px;
  margin-top: 15px;
`;

export const ScorePlate = styled.div`
  margin-top: 20px;
`;
