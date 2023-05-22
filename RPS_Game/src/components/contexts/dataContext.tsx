import React, { ReactNode, createContext, useState } from "react";
import { FC } from "react";
import { ButtonHTMLAttributes } from "react";

type GameType = {
  id: number;
  result: "win" | "lose" | "draw";
};

type UserType = {
  id: number;
  user: string;
  games: GameType[];
};

type InitialType = {
  players: UserType[];
  currentUser: UserType | {};
};

type AuxProps = {
  children: React.ReactNode;
};

export type AppContextType = {
  state: InitialType;
};

const initialState = {
  players: [],
  currentUser: {},
};

export const GameContext = createContext<AppContextType>({
  state: initialState,
});

export const AppProviderClasic: FC<AuxProps> = ({ children, ...props }) => {
  const [state, setState] = useState<InitialType>(initialState);

  return (
    <GameContext.Provider value={{ state }}>{children}</GameContext.Provider>
  );
};
