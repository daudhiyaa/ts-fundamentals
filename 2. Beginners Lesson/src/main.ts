let myName: string = "Dave";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "John";
meaningOfLife = 42;
isLoading = true;
album = 5150;

let unionType: string | number;
unionType = "string";
unionType = 42;

const sum = (a: number, b: string): string => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
