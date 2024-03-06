// Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types
let myName: "Dave";

let userName: "Dave" | "John" | "Amy";
userName = "Amy";

// Basic Function
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

// Function Type Aliases
// interface mathFunction {
//   (a: number, b: number): number
// }
type mathFunction = (a: number, b: number) => number;

let subtract: mathFunction = (c, d) => {
  return c - d;
};

let multiply: mathFunction = function (c, d) {
  return c * d;
};

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 3));

// "never" type
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    // if (i > 100) break;
  }
};

// custom type guard (checking the type of a value)
const isNumber = (value: any): boolean => {
  return typeof value === "number";
};

// use of the never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";

  // here the usage of never type
  return createError("This should never happen!");
};
