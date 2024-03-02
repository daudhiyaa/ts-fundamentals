// Arrays
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];
let mixed = ["John", 1, false];

myTuple[1] = 42;

// Objects
let myObj: object;
myObj = {};
myObj = [];
myObj = bands; // bands: string[] = [];
console.log(typeof myObj);

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "John";

// Optional Object Properties
let optionalObj: {
  name: string;
  age?: number;
};

// Object type annotations
type Student = {
  name: string;
  age: number;
  isActive: boolean;
};

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  active: true,
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name?.toUpperCase()}!`;
};

console.log(greetGuitarist(jp));

// Enums
/*
 * "Unlike most TypeScript features,
 * Enums are not a type-level addition to JavaScript
 * but something added to the language and runtime."
 */

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
