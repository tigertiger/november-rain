import * as State from "./state.js";

// const mainCharacter = State.storeState();

export const nameChar = (name) => {
  return (character) => ({
    ...character,
    name: name,
  });
};

export const giveAttackFunction = (attackFunctionToGive) => {
  return (character) => ({
    ...character,
    attack: attackFunctionToGive,
  });
};

// export const doubleStrike = () => {
//   return  currentState.attack * 2;
// }
// export const tripleStrike = () => {
//   return  currentState.attack * 3;
// }

export const gainExp = State.changeState("exp")(3);
export const levelUp = State.changeState("level")(1);

export const takeDamage = State.changeState("hp");
export const takeBigDamage = State.changeState("hp");

export const healthPotion = State.changeState("hp")(5);

export const defenseUp = State.changeState("defense")(5);
export const attackUp = State.changeState("attack")(5);