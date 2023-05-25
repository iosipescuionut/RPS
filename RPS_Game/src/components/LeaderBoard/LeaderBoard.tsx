import React, { useContext, useEffect, useState } from "react";
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

  const sortedPlayers = [...players].sort((a, b) => b.win - a.win);

  return (
    <LeaderBoardContainer>
      <ScoreTitle>Leader Board</ScoreTitle>
      <ListContainer>
        <ListContainerBox>
          {sortedPlayers.map((el) => (
            <LeaderItem
              key={el.id}
              index={el.id}
              isCurrentUser={currentUser.id === el.id}
            >
              <LeaderTitle
                index={el.id}
                isCurrentUser={currentUser.id === el.id}
              >
                {el.user}
              </LeaderTitle>
              <PlayerTotalScore>{el.win}</PlayerTotalScore>
            </LeaderItem>
          ))}
        </ListContainerBox>
      </ListContainer>
    </LeaderBoardContainer>
  );
};

export default LeaderBoard;
