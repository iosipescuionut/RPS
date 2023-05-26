import { GridFlow } from "../GameArea/GameArea.style";
import PlayerBoard from "../PlayerBoard/PlayerBoard";
import LeaderBoard from "../LeaderBoard/LeaderBoard";

function ScoreArea() {
  return (
    <GridFlow>
      <PlayerBoard />
      <LeaderBoard />
    </GridFlow>
  );
}

export default ScoreArea;
