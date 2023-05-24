import React, { useEffect } from "react";
import { WeaposContainer, WeaponItem } from "./Weapons.style";
import CustomIcon from "./CustomIcon";

const Weapons = ({ ...props }) => {
  const { choices, handleClick, userChoice } = props;

  return (
    <>
      <WeaposContainer>
        {choices.map((choice: string, index: number) => (
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
