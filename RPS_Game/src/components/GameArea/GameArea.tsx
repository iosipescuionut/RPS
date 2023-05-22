import {
  GameAreaTitle,
  CircleElement,
  ResultRank,
  GridFlow,
  Results,
  BattleContainer,
  PlayerBox,
  Weapon,
  WeaposContainer,
  CustomPaperIcon,
  CustomRockIcon,
  CustomScissorsIcon,
} from "./GameArea.style";
import { ScoreButton } from "../ScoreArea/ScoreArea.style";

function GameArea() {
  return (
    <Results data-spacing="large">
      {/* <GameAreaTitle>Your Result</GameAreaTitle> */}
      <BattleContainer>
        <PlayerBox>User</PlayerBox>
        <CircleElement>
          <span>VS</span>
        </CircleElement>
        <PlayerBox>Bot</PlayerBox>
      </BattleContainer>
      <WeaposContainer>
        {/* <ResultRank>Great</ResultRank> */}
        {/* <p>
          You scored higher than 65% of the people who have taken these tests.
        </p> */}
        <Weapon>
          <CustomPaperIcon />
        </Weapon>
        <Weapon>
          <CustomRockIcon />
        </Weapon>
        <Weapon>
          <CustomScissorsIcon />
        </Weapon>
      </WeaposContainer>
      <ScoreButton>Start Game</ScoreButton>
    </Results>
  );
}

export default GameArea;
