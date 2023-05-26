import React, {
  useEffect,
  useState,
  ChangeEvent,
  useContext,
  FormEvent,
} from "react";
import {
  ModalCard,
  ModalContainer,
  ModalWrapper,
  CustomInput,
  CustomLabel,
  ModalButton,
} from "./Modal.style";
import { GameContext } from "../contexts/GameContext";
import { AppContextType } from "../contexts/GameContext";

type ModalProps = {
  setShowModal: (arg: boolean) => void;
};

type PlayerName = {
  name: string;
};

const PlayerObj = {
  name: "",
};

const Modal: React.FC<ModalProps> = ({ setShowModal }) => {
  const { setUser } = useContext<AppContextType>(GameContext);
  const [userName, setUserName] = useState<PlayerName>(PlayerObj);
  const { name } = userName;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const localData = localStorage.getItem("state");
    const storedState = localData ? JSON.parse(localData) : null;
    setUser(name, storedState?.players);
    setShowModal(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserName({ ...userName, [name]: value });
  };

  return (
    <ModalWrapper>
      <ModalCard>
        <ModalContainer onSubmit={(e) => handleSubmit(e)}>
          <h2>Welcome to Rock, Paper, Scissors Game!</h2>
          <p>
            Welcome to Rock Paper Scissors! Before you start playing, please
            create your character name in the modal below. Once you've created
            your character, you can start playing against the computer. Good
            luck!
          </p>
          <CustomLabel>
            <div>Player name:</div>
            <div>{name.length}/8</div>
          </CustomLabel>
          <CustomInput
            onChange={(e) => handleChange(e)}
            type="text"
            name="name"
            value={name}
            placeholder="Keep it short and cool ..."
            maxLength={8}
          />
          <ModalButton type="submit">Log In</ModalButton>
        </ModalContainer>
      </ModalCard>
    </ModalWrapper>
  );
};

export default Modal;
