import styled from "styled-components";
// import { device } from "../../utils/breakpoints/breakpoints";

export const GameContainer = styled.div`
  max-width: 60rem;
  display: grid;
  min-height: 689px;

  @media (min-width: 600px) {
    margin-inline: 1rem;
    grid-template-columns: 2fr 1fr;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;
