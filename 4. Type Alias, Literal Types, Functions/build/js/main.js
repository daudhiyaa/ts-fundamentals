"use strict";
// Literal types
let myName;
let userName;
userName = "Amy";
// Basic Function
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = (c, d) => {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
// "never" type
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // if (i > 100) break;
    }
};
// custom type guard (checking the type of a value)
const isNumber = (value) => {
    return typeof value === "number";
};
// use of the never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    // here the usage of never type
    return createError("This should never happen!");
};
