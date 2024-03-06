// type aliases
type One = string;
type Two = string | number;

// literal types
type Three = "hello";

// =========================
// ==== TYPE ASSERTIONS ====
// =========================

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

// use angle bracket, but not recommended
// because it can conflict with JSX
let d = <One>"world";
let e = <string | number>"world";
let f = <Two>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  return c === "add" ? a + b : "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string
10 as unknown as string;

// The DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;

// ======================
// ==== TYPE CASTING ====
// ======================

let myNumber: number = 5;
// Casting 'myNumber' to string
let myString: string = String(myNumber);
