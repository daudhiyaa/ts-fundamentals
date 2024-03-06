"use strict";
// =========================
// ==== TYPE ASSERTIONS ====
// =========================
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
// use angle bracket, but not recommended
// because it can conflict with JSX
let d = "world";
let e = "world";
let f = "world";
const addOrConcat = (a, b, c) => {
    return c === "add" ? a + b : "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string
10;
// The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
// ======================
// ==== TYPE CASTING ====
// ======================
let myNumber = 5;
// Casting 'myNumber' to string
let myString = String(myNumber);
