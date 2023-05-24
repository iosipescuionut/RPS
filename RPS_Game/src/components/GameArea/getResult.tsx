import { GameResult, GameWeapons } from "./GameArea";

export const getResult = (
  userChoice: GameWeapons,
  computerChoice: GameWeapons
): GameResult => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      return "win";
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      return "lose";
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      return "draw";
    default:
      return "";
  }
};

export const getWinner = (result: GameResult): string => {
  if (!result) return "";
  switch (result) {
    case "win":
      return "User Win the Game! 🎉";
    case "lose":
      return "Computer Win the Game! ❌";
    case "draw":
      return "Draw 🤝🏻";
    default:
      return "";
  }
};
