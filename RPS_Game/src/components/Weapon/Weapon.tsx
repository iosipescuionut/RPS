import React from "react";
import { WeaposContainer, WeaponItem } from "./Weapons.style";
import CustomIcon from "./CustomIcon";
import { WeaponsType } from "../GameArea/GameArea";
import { GameWeapons } from "../GameArea/GameArea";

const Weapons = ({ choices, handleClick, userChoice }: WeaponsType) => {
  return (
    <>
      <WeaposContainer>
        {choices.map((choice: GameWeapons, index: number) => (
          <WeaponItem
            key={index}
            onClick={() => handleClick(choice)}
            selected={choice === userChoice ? "selected" : ""}
          >
            <CustomIcon choice={choice} />
          </WeaponItem>
        ))}
      </WeaposContainer>
    </>
  );
};

export default Weapons;
