import { GameContainer } from "./Game.style";
import GameArea from "../GameArea/GameArea";
import ScoreArea from "../ScoreArea/ScoreArea";
import { useEffect, useContext } from "react";
import { GameContext } from "../contexts/GameContext";

function Game() {
  const { state } = useContext(GameContext);
  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <GameContainer>
      <GameArea />
      <ScoreArea />
    </GameContainer>
  );
}

export default Game;
