import styled from "styled-components";

export const ScoreTitle = styled.h2`
  font-size: var(--fs-600);
  font-weight: var(--fw-bold);
  margin-bottom: 15px;
`;

export const ScoreButton = styled.button`
  color: var(--gray);
  line-height: 1;
  background: var(--btn-bg);
  padding: 1rem 2rem;
  border: 0;
  border-radius: 100vw;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background: rgb(46, 43, 233);
    background: linear-gradient(
      0deg,
      rgba(46, 43, 233, 1) 0%,
      rgba(120, 87, 255, 1) 100%
    );
  }
`;
