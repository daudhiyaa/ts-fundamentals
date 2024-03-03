// ===== Original JS code =====
// const jsYear = document.getElementById("year");
// const jsThisYear = new Date().getFullYear();
// jsYear.setAttribute("datetime", thisYear);
// jsThisYear.textContent = thisYear;

// ===== 1st variation: (Beginner) =====
let year1stVariation: HTMLElement | null;
year1stVariation = document.getElementById("year");

let thisYear1stVariation: string;
thisYear1stVariation = new Date().getFullYear().toString();

if (year1stVariation) {
  year1stVariation.setAttribute("datetime", thisYear1stVariation);
  year1stVariation.textContent = thisYear1stVariation;
}

// ===== 2nd variation: (with Type Assertion) =====
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
