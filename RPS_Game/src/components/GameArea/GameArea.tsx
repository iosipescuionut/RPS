import React, { useState, useEffect, useContext } from "react";
import {
  GameAreaTitle,
  CircleElement,
  Results,
  BattleContainer,
  PlayerBox,
  PlayerContainer,
  WeaponLabel,
  ScorePlate,
  WeaponGame,
} from "./GameArea.style";
import ScoreButton from "./ScoreButton";
import Weapons from "../Weapon/Weapon";
import { GameContext } from "../contexts/GameContext";
import { getResult, getWinner } from "./getResult";
import CustomIcon from "../Weapon/CustomIcon";
import { Loader } from "../Loader/Loader.style";
import { AppContextType } from "../contexts/GameContext";

export type GameResult = "win" | "lose" | "draw" | "";
export type GameWeapons = "rock" | "paper" | "scissors" | "";
export type WeaponsType = {
  choices: GameWeapons[];
  handleClick: (arg: GameWeapons) => void;
  userChoice: GameWeapons;
};

function GameArea() {
  const { state, setUpdateUser } = useContext<AppContextType>(GameContext);
  const [userChoice, setUserChoice] = useState<GameWeapons>("");
  const [computerChoice, setComputerChoice] = useState<GameWeapons>("");
  const [result, setResult] = useState<GameResult>("");
  const [winner, setWinner] = useState<string>("");
  const [timer, seTimer] = useState<number>(3);
  const [runTimer, setRunTimer] = useState<boolean>(false);
  const [armed, setArmed] = useState<boolean>(false);
  const choices: GameWeapons[] = ["rock", "paper", "scissors"];

  const {
    currentUser: { win, lose, user },
  } = state;

  // timer
  const handleScores = () => {
    setRunTimer(true);
    generateComputerChoice();
  };

  // User Choice
  const handleClick = (value: GameWeapons) => {
    setArmed(false);
    setWinner("");
    setUserChoice(value);
  };

  // Computer Choice
  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  // Final Desition
  const handleResults = () => {
    const resultGame = getResult(userChoice, computerChoice);
    setUpdateUser(resultGame);
    setResult(resultGame);
    setRunTimer(false);
    seTimer(3);
    setArmed(true);
  };

  // Timer 3 -> 0 run handleResults() will generate result
  useEffect(() => {
    if (runTimer && timer > 0) {
      setTimeout(() => {
        seTimer(timer - 1);
      }, 1000);
    } else if (runTimer && timer < 1) {
      handleResults();
    }
  }, [runTimer, timer]);

  // After updating result set the winner and update localStorage
  useEffect(() => {
    setWinner(getWinner(result, user));
    localStorage.setItem("state", JSON.stringify(state));
  }, [result, state]);

  return (
    <Results data-spacing="large">
      <GameAreaTitle>{!runTimer ? winner : ""}</GameAreaTitle>
      <BattleContainer>
        <PlayerContainer>
          <PlayerBox>{user}</PlayerBox>
          <WeaponGame>
            {runTimer ? (
              <Loader />
            ) : (
              <CustomIcon choice={armed ? userChoice : ""} />
            )}
            <WeaponLabel>{armed ? userChoice : ""}</WeaponLabel>
          </WeaponGame>
          <ScorePlate>Score: {win}</ScorePlate>
        </PlayerContainer>
        <CircleElement>
          <span>{!runTimer ? "VS" : `${timer}`}</span>
        </CircleElement>
        <PlayerContainer>
          <PlayerBox>Bot</PlayerBox>
          <WeaponGame>
            {runTimer ? (
              <Loader />
            ) : (
              <CustomIcon choice={armed ? computerChoice : ""} />
            )}
            <WeaponLabel>{armed ? computerChoice : ""}</WeaponLabel>
          </WeaponGame>
          <ScorePlate>Score: {lose}</ScorePlate>
        </PlayerContainer>
      </BattleContainer>
      <Weapons
        choices={choices}
        handleClick={handleClick}
        userChoice={userChoice}
      />
      <ScoreButton onClick={handleScores}>Start Game</ScoreButton>
    </Results>
  );
}

export default GameArea;
