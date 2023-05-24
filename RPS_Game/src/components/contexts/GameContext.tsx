import React, { ReactNode, createContext, useState } from "react";
import { FC } from "react";
import { ButtonHTMLAttributes } from "react";
import { GameResult } from "../GameArea/GameArea";

type UserType = {
  id: number;
  user: string;
  win: number;
  lose: number;
  draw: number;
  total: number;
};

type InitialType = {
  players: UserType[];
  currentUser: UserType;
};

type AuxProps = {
  children: React.ReactNode;
};

export type AppContextType = {
  state: InitialType;
  setUser: (result: GameResult) => void;
};

const initialState: InitialType = {
  players: [],
  currentUser: {
    id: 0,
    user: "",
    win: 0,
    lose: 0,
    draw: 0,
    total: 0,
  },
};

const setUpdateUser = (result: GameResult, state: InitialType): UserType => {
  const { currentUser } = state;
  if (!result) return currentUser;
  return { ...currentUser, [result]: currentUser[result] + 1 };
  // switch (result) {
  //   case "win":
  //     return { ...currentUser, win: currentUser.win + 1 };
  //   case "lose":
  //     return { ...currentUser, lose: currentUser.lose + 1 };
  //   case "draw":
  //     return { ...currentUser, draw: currentUser.draw + 1 };
  //   default:
  //     return currentUser;
  // }
};

export const GameContext = createContext<AppContextType>({
  state: initialState,
  setUser: () => {},
});

export const GameProvider: FC<AuxProps> = ({ children }: AuxProps) => {
  const [state, setState] = useState<InitialType>(initialState);

  const setUser = (result: GameResult) => {
    const updateUser = setUpdateUser(result, state);
    setState({ ...state, currentUser: updateUser });
  };

  return (
    <GameContext.Provider value={{ state, setUser }}>
      {children}
    </GameContext.Provider>
  );
};
