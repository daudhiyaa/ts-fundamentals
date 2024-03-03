// ==========================
// ==== INDEX SIGNATURES ====
// ==========================

interface TransactionObj {
  readonly [index: string | number]: number | string;
  // you can also add other explicit properties
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 10,
};

// dynamically access
let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions)
    total += transactions[transaction] as number;
  return total;
};

// static access
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

// ==== OPTIONAL PROPERTIES ====
interface Student {
  // [key: string]: string | number | number[] | undefined
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

// ==== "keyof" ASSERTIONS ====
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "name");

// ==== RECORD UTILITY TYPE ====

// interface Incomes {
//     [key: string]: number
// }

type Streams = "salary" | "bonus" | "sidehustle" | "gajipokok";
// ! Here the Record utility type is used to define the Incomes interface
type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
  gajipokok: "1000",
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
