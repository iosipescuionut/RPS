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
import { ScoreButton } from "../ScoreArea/ScoreArea.style";
import Weapons from "../Weapon/Weapon";
import { GameContext } from "../contexts/GameContext";
import { getResult, getWinner } from "./getResult";
import CustomIcon from "../Weapon/CustomIcon";
import { Loader } from "../Loader/Loader.style";

export type GameResult = "win" | "lose" | "draw" | "";
export type GameWeapons = "rock" | "paper" | "scissors" | "";

function GameArea() {
  const { state, setUpdateUser } = useContext(GameContext);
  const [userChoice, setUserChoice] = useState<GameWeapons>("");
  const [computerChoice, setComputerChoice] = useState<GameWeapons>("");
  const [result, setResult] = useState<GameResult>("");
  const [winner, setWinner] = useState<string>("");
  const [timer, seTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [armed, setArmed] = useState(false);

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
    console.log(value);
    setArmed(false);
    setWinner("");
    setUserChoice(value);
  };

  // Computer Choice
  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(randomChoice);
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

  const choices: GameWeapons[] = ["rock", "paper", "scissors"];

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
        {/* Reminder | De mutat intr-o comp separata PlayerContainer*/}
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
        {/* Reminder | De mutat intr-o comp separata PlayerContainer*/}
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
