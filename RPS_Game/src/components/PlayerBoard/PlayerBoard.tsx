import { useContext } from "react";
import {
  ListItem,
  FlexGroup,
  TrophyIcon,
  ListTitle,
  SadFaceIcon,
  HandsShakeIcon,
  FlagIcon,
} from "../ScoreArea/ScoreArea.style";
import { PlayerBoardContainer } from "./PlayerBoard.style";
import { GameContext } from "../contexts/GameContext";
import { ScoreTitle } from "../ScoreArea/ScoreArea.style";
import { AppContextType } from "../contexts/GameContext";

const PlayerBoard = () => {
  const { state } = useContext<AppContextType>(GameContext);
  const {
    currentUser: { win, lose, draw, total },
  } = state;

  return (
    <>
      <ScoreTitle>Player Board</ScoreTitle>
      <PlayerBoardContainer>
        <ListItem result={"win"}>
          <FlexGroup>
            <TrophyIcon />
            <ListTitle result={"win"}>{win}</ListTitle>
          </FlexGroup>
        </ListItem>
        <ListItem result={"lose"}>
          <FlexGroup>
            <SadFaceIcon />
            <ListTitle result={"lose"}>{lose}</ListTitle>
          </FlexGroup>
        </ListItem>
        <ListItem result={"draw"}>
          <FlexGroup>
            <HandsShakeIcon />
            <ListTitle>{draw}</ListTitle>
          </FlexGroup>
        </ListItem>
        <ListItem result={"total"}>
          <FlexGroup>
            <FlagIcon />
            <ListTitle result={"total"}>{total}</ListTitle>
          </FlexGroup>
        </ListItem>
      </PlayerBoardContainer>
    </>
  );
};

export default PlayerBoard;
