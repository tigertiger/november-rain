import * as State from "./state.js";

const slime = State.storeState({name: "Horrible, Hideous Slime", level: 1, mobExp: 10, hp: 15, attack: 2, defense: 4, defeated: false});

const punk = State.storeState({name: "Lilian/Lil' Ian", level: 2, mobExp: 20, hp: 20, attack: 5, defense: 5, defeated: false});

const indieKid = State.storeState({name: "Charlotte", level: 2, mobExp: 20, hp: 15, attack: 6, defense: 4, defeated: false});

const ben = State.storeState({name: "Ben Dunham", level: 4, mobExp: 40, hp: 40, attack: 6, defense: 8, defeated: false});

const budTender = State.storeState({name: "Shaz", level: 5, mobExp: 30, hp: 50, attack: 2, defense: 12, defeated: false});

const unicorn = State.storeState({name: "Unicorn", level: 20, mobExp: 300, hp: 200, attack: 30, defense: 20, defeated: false});

const Axl = State.storeState({name: "Axl", level: 9000, mobExp: 500, hp: 300, attack: 50, defense: 50, defeated: false});

export const mobArray = [slime, punk, indieKid, ben, budTender, unicorn, Axl];