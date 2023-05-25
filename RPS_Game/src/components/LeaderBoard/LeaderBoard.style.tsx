import styled from "styled-components";
import { ListItem, ListTitle, FlexGroup } from "../ScoreItem/ScoreItem.style";

type LeaderType = {
  index: number;
  isCurrentUser: boolean;
};

export const LeaderBoardContainer = styled.div`
  margin-top: 50px;
`;

export const LeaderItem = styled.div<LeaderType>`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ isCurrentUser, index }) =>
    isCurrentUser
      ? "var(--blue-extra-light)"
      : index % 2 === 0
      ? "var(--purple-extra-light)"
      : "var(--brown-light)"};
  svg {
    stroke: ${({ index }) =>
      index % 2 === 0 ? "var(--purple-light)" : "var(--yellow)"};
  }
`;

export const LeaderTitle = styled.div<LeaderType>`
  color: ${({ isCurrentUser, index }) =>
    isCurrentUser
      ? "var(--blue)"
      : index % 2 === 0
      ? "var(--purple-light)"
      : "var(--yellow)"};
  font-weight: var(--fw-bold);
`;

export const LeaderGroup = styled(FlexGroup)``;

export const PlayerTotalScore = styled.div``;
