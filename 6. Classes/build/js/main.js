"use strict";
// ===============
// ==== CLASS ====
// ===============
// Basic Class
class Person {
    constructor(name, age, nationality, hobbies) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.hobbies = hobbies;
    }
}
// ===== Visibility Modifiers =====
// or Access Modifiers (public, private, protected)
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
    }
    getAge() {
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
    constructor(computer, name, music, age, lang = "Javascript") {
        super(name, music, age, lang);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
        // return `I write ${this.age}`; // Typescript doesn't like this
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
// ===== STATIC MEMBERS =====
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Amy.id); // 3
console.log(Steve.id); // 2
console.log(John.id); // 1
console.log(Peeps.count); // 3
// ===== GETTER & SETTER =====
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
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
