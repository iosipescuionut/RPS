import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: #f5f5f5;
`;

export const ModalCard = styled.div`
  max-width: 50rem;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: rgba(255, 255, 255, 0.3);
  padding: 15px;
  border-radius: 20px;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(25px);
    border-radius: 20px;
    background-color: #e499ff;
    background-image: radial-gradient(
        at 47% 69%,
        hsla(17, 62%, 65%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 9% 32%, hsla(222, 75%, 60%, 1) 0px, transparent 50%);
  }
`;

export const ModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px;
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
    font-size: 1em;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 30px;
  }
`;
export const CustomLabel = styled.label`
  color: #000;
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;
export const CustomInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 0.6em;
  padding-left: 0.9em;
  border-radius: 20px;
  background: #fff;
  margin-bottom: 25px;
`;

export const ModalButton = styled.button`
  transition: all 0.5s ease;
  width: 100%;
  align-self: center;
  font-size: 17px;
  text-transform: uppercase;
  padding: 1em 2.5em;
  border-radius: 6em;
  border: none;
  font-family: inherit;
  font-weight: 500;
  color: black;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
  }
  &:active {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }
  @media (min-width: 600px) {
    width: 50%;
  }
`;
