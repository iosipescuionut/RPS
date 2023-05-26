import React, { createContext, useState } from "react";
import { FC } from "react";
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
  setUpdateUser: (result: GameResult) => void;
  setUser: (name: string, players: UserType[]) => void;
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

const setUpdateScore = (
  result: GameResult,
  state: InitialType
): InitialType => {
  const { currentUser, players } = state;
  if (!result) return state;

  const updateUser: UserType = {
    ...currentUser,
    [result]: currentUser[result] + 1,
    total: currentUser.total + 1,
  };

  const updateArr: UserType[] = players.map((el) =>
    el.id === currentUser.id ? { ...updateUser } : el
  );

  return {
    players: updateArr,
    currentUser: updateUser,
  };
};

const setAuthUser = (name: string, players: UserType[]): InitialType => {
  console.log(players);
  if (!players) {
    const newUser: UserType = {
      id: 1,
      user: name,
      win: 0,
      lose: 0,
      draw: 0,
      total: 0,
    };

    return {
      players: [newUser],
      currentUser: newUser,
    };
  }

  const findUser = players?.find((el) => el.user === name);

  if (!findUser) {
    const newUser: UserType = {
      id: players?.length + 1,
      user: name,
      win: 0,
      lose: 0,
      draw: 0,
      total: 0,
    };

    return {
      players: [...players, newUser],
      currentUser: newUser,
    };
  } else {
    return {
      players,
      currentUser: findUser,
    };
  }
};

export const GameContext = createContext<AppContextType>({
  state: initialState,
  setUpdateUser: () => {},
  setUser: () => {},
});

export const GameProvider: FC<AuxProps> = ({ children }: AuxProps) => {
  const [state, setState] = useState<InitialType>(initialState);

  const setUpdateUser = (result: GameResult) => {
    const { players, currentUser } = setUpdateScore(result, state);
    setState({ ...state, currentUser: currentUser, players: players });
  };

  const setUser = (name: string, playersData: UserType[]) => {
    const { players, currentUser } = setAuthUser(name, playersData);
    setState({ ...state, currentUser: currentUser, players: players });
  };

  return (
    <GameContext.Provider value={{ state, setUpdateUser, setUser }}>
      {children}
    </GameContext.Provider>
  );
};
