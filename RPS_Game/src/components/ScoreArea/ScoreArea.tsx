import ScoreItem from "../ScoreItem/ScoreItem";
import { GridFlow } from "../GameArea/GameArea.style";
import { ScoreTitle } from "./ScoreArea.style";

function ScoreArea() {
  return (
    <GridFlow>
      <ScoreTitle>Total Games: 20</ScoreTitle>
      <ScoreItem />
    </GridFlow>
  );
}

export default ScoreArea;
