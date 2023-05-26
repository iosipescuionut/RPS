import { GameContainer } from "./Game.style";
import GameArea from "../GameArea/GameArea";
import ScoreArea from "../ScoreArea/ScoreArea";

function Game() {
  return (
    <GameContainer>
      <GameArea />
      <ScoreArea />
    </GameContainer>
  );
}

export default Game;
