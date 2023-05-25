import React, { useContext } from "react";
import { ScoreTitle } from "../ScoreArea/ScoreArea.style";
import { GameContext } from "../contexts/GameContext";
import { LeaderBoardContainer } from "./LeaderBoard.style";
import {
  ListItem,
  ListTitle,
  ListContainer,
  ListContainerBox,
} from "../ScoreItem/ScoreItem.style";
import {
  LeaderItem,
  LeaderGroup,
  LeaderTitle,
  PlayerTotalScore,
} from "./LeaderBoard.style";

const LeaderBoard = () => {
  const { state } = useContext(GameContext);
  const { players, currentUser } = state;
  return (
    <LeaderBoardContainer>
      <ScoreTitle>Leader Board</ScoreTitle>
      <ListContainer>
        <ListContainerBox>
          {players.map((el) => (
            <LeaderItem key={el.id} index={el.id}>
              <LeaderTitle index={el.id}>{el.user}</LeaderTitle>
              <PlayerTotalScore>{el.win}</PlayerTotalScore>
            </LeaderItem>
          ))}
        </ListContainerBox>
      </ListContainer>
    </LeaderBoardContainer>
  );
};

export default LeaderBoard;
