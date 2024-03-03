// ===============
// ==== CLASS ====
// ===============

// Basic Class
class Person {
  name: string;
  age: number;
  nationality: string;
  hobbies: string[];

  constructor(
    name: string,
    age: number,
    nationality: string,
    hobbies: string[]
  ) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    this.hobbies = hobbies;
  }
}

// ===== Visibility Modifiers =====
// or Access Modifiers (public, private, protected)

class Coder {
  // Definite Assignment Assertion
  // (Non-null Assertion Operator)
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.age = age;
    this.music = music;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());

// This will give an error
// because age is private & lang is protected
// console.log(Dave.age)
// console.log(Dave.lang)

// ==== INHERITANCE ====
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
    lang: string = "Javascript"
  ) {
    super(name, music, age, lang);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
    // return `I write ${this.age}`; // Typescript doesn't like this
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
// console.log(Sara.age)
// console.log(Sara.lang)

// ==== IMPLEMENTS ====
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));

// ===== STATIC MEMBERS =====
class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Amy.id); // 3
console.log(Steve.id); // 2
console.log(John.id); // 1
console.log(Peeps.count); // 3

// ===== GETTER & SETTER =====
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
// this is how to use setter method
MyBands.data = ["Neil Young", "Led Zep"];
// this is how to use getter method
console.log(MyBands.data);

MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
// MyBands.data = ["Van Halen", 5150]; // must be string data
