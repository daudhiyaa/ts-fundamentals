"use strict";
// ==========================
// ==== INDEX SIGNATURES ====
// ==========================
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 10,
};
// dynamically access
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions)
        total += transactions[transaction];
    return total;
};
// static access
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// ==== "keyof" ASSERTIONS ====
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
    gajipokok: "1000",
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
