import ScoreItem from "../ScoreItem/ScoreItem";
import { GridFlow } from "../GameArea/GameArea.style";
import { ScoreTitle } from "./ScoreArea.style";
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
