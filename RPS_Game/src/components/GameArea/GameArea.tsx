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
  const { state, setUser } = useContext(GameContext);
  const [userChoice, setUserChoice] = useState<GameWeapons>("");
  const [computerChoice, setComputerChoice] = useState<GameWeapons>("");
  const [result, setResult] = useState<GameResult>("");
  const [winner, setWinner] = useState<string>("");
  const [timer, seTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [armed, setArmed] = useState(false);

  const {
    currentUser: { win, lose },
  } = state;

  const handleClick = (value: GameWeapons) => {
    console.log(value);
    setArmed(false);
    setWinner("");
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(randomChoice);
    setComputerChoice(randomChoice);
  };

  const choices: GameWeapons[] = ["rock", "paper", "scissors"];

  useEffect(() => {
    if (runTimer && timer > 0) {
      setTimeout(() => {
        seTimer(timer - 1);
      }, 1000);
    } else if (runTimer && timer < 1) {
      console.log(userChoice, computerChoice);
      setUser(getResult(userChoice, computerChoice));
      setResult(getResult(userChoice, computerChoice));
      setRunTimer(false);
      seTimer(3);
      setArmed(true);
      console.log("Stop Timer");
    }
    console.log(timer);
  }, [runTimer, timer]);

  useEffect(() => {
    setWinner(getWinner(result));
    console.log("Here are te results", result);
  }, [result]);

  const handleScores = () => {
    console.log("Start Timer");
    setRunTimer(true);
    console.log(timer);
  };

  return (
    <Results data-spacing="large">
      <GameAreaTitle>{!runTimer ? winner : ""}</GameAreaTitle>
      <BattleContainer>
        <PlayerContainer>
          <PlayerBox>User</PlayerBox>
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
