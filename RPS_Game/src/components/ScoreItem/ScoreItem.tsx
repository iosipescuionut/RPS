import { useState } from "react";
import {
  ListItem,
  ListTitle,
  TotalScore,
  FlexGroup,
  ListContainer,
  TrophyIcon,
  SadFaceIcon,
  HandsShakeIcon,
} from "./ScoreItem.style";

function ScoreItem() {
  // const [gameResult, setGameResult] = useState<string>("");

  return (
    <ListContainer>
      <ListItem result={"win"}>
        <FlexGroup>
          <TrophyIcon />
          <ListTitle result={"win"}>Win</ListTitle>
        </FlexGroup>
      </ListItem>
      <ListItem result={"win"}>
        <FlexGroup>
          <TrophyIcon />
          <ListTitle result={"win"}>Win</ListTitle>
        </FlexGroup>
      </ListItem>
      <ListItem result={"lose"}>
        <FlexGroup>
          <SadFaceIcon />
          <ListTitle result={"lose"}>Lose</ListTitle>
        </FlexGroup>
      </ListItem>
      <ListItem result={"draw"}>
        <FlexGroup>
          <HandsShakeIcon />
          <ListTitle>Draw</ListTitle>
        </FlexGroup>
      </ListItem>
      <ListItem result={"win"}>
        <FlexGroup>
          <TrophyIcon />
          <ListTitle result={"win"}>Win</ListTitle>
        </FlexGroup>
      </ListItem>
      <ListItem result={"win"}>
        <FlexGroup>
          <TrophyIcon />
          <ListTitle result={"win"}>Win</ListTitle>
        </FlexGroup>
      </ListItem>
    </ListContainer>
  );
}

export default ScoreItem;
