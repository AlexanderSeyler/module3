//question 1
function ucFirstLetters(cap) {
  const letters = cap.split(" ");
  const capletter = letters.map(
    (letter) => letter.charAt(0).toUpperCase() + letter.slice(1)
  );
  return capletter.join(" ");
}

console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("test text if it works"));
console.log(ucFirstLetters("it does work"));

//question 2
function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max - 3) + "...";
  } else {
    return str;
  }
}
console.log(truncate("This text will be truncated if it is too long", 25));

function truncate(str, max) {
  return str.length > max ? str.slice(0, max - 3) + "..." : str;
}

console.log(truncate("This text will be truncated if it is too long", 25));

//question 3
const animals = ["Tiger", "Giraffe"];
console.log(animals);

animals.push("Elephant", "Lion");
console.log(animals);

animals.unshift("Zebra", "Monkey");
console.log(animals);

animals.sort();
console.log(animals);

function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals.splice(middleIndex, 1, newValue);
}

replaceMiddleAnimal("Bear");
console.log(animals);

function findMatchingAnimals(beginsWith) {
  beginsWith = beginsWith.toLowerCase();
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith)
  );
}

console.log(findMatchingAnimals("e"));
//question 4

function camelCase(css) {
  let words = css.split("-");
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join("");
}

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

function camelCase(css) {
  let words = css.split("-");
  let camelCased = "";
  for (let word of words) {
    camelCased +=
      word === words[0] ? word : word.charAt(0).toUpperCase() + word.slice(1);
  }
  return camelCased;
}

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

function camelCase(css) {
  let words = css.split("-");
  let camelCased = "";
  for (let i = 0; i < words.length; i++) {
    camelCased +=
      i === 0 ? words[i] : words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return camelCased;
}

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

//question 5
let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?
//It is cause it returns a floating string and not a fixed number.

function currencyAddition(float1, float2) {
  let number1 = float1 * 100;
  let number2 = float2 * 100;
  return (number1 + number2) / 100;
}

console.log(currencyAddition(0.1, 0.2));

function currencyOperation(float1, float2, operation) {
  let number1 = float1 * 100;
  let number2 = float2 * 100;
  switch (operation) {
    case "+":
      return (number1 + number2) / 100;
    case "-":
      return (number1 - number2) / 100;
    case "*":
      return (number1 * number2) / 100;
    case "/":
      return number1 / number2 / 100;
    default:
      return (number1 + number2) / 100;
  }
}

function currencyOperation(float1, float2, operation, numDecimals) {
  const factor = Math.pow(10, numDecimals);
  let total = 0;
  let number1 = float1 * factor;
  let number2 = float2 * factor;
  switch (operation) {
    case "+":
      total = number1 + number2;
      break;
    case "-":
      total = number1 - number2;
      break;
    case "*":
      total = number1 * number2;
      break;
    case "/":
      total = number1 / number2;
      break;
    default:
      total = number1 + number2;
      break;
  }
  return Math.round(total) / factor;
}

console.log(currencyOperation(0.1, 0.2, "+", 2));

//question 6
function unique(duplicatesArray) {
  const uniqueValues = [];
  for (let i = 0; i < duplicatesArray.length; i++) {
    if (uniqueValues.indexOf(duplicatesArray[i]) === -1) {
      uniqueValues.push(duplicatesArray[i]);
    }
  }
  return uniqueValues;
}
const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

//question 7
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function getBookTitle(bookId) {
  const book = books.find((book) => book.id === bookId);
  return book.title;
}

console.log(getBookTitle(3));

function getOldBooks() {
  return books.filter((book) => book.year < 1950);
}

console.log(getOldBooks());

function addGenre() {
  return books.map((book) => ({ ...book, genre: "classic" }));
}

console.log(addGenre());

function getTitles(authorInitial) {
  return books
    .filter((book) => book.author.charAt(0) === authorInitial.toUpperCase())
    .map((book) => book.title);
}

console.log(getTitles("f"));

function latestBook() {
  let latest = books[0];
  books.forEach((book) => {
    if (book.year > latest.year) {
      latest = book;
    }
  });
  return latest;
}

console.log(latestBook());

//question 8
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

const phoneBookDEF = new Map([
  ["Joe", "0444444"],
  ["Bob", "0555555"],
  ["Peter", "0666666"],
]);

phoneBookABC.set("Caroline", "0422334455");

function printPhoneBook(contacts) {
  contacts.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

phoneBook.forEach((value, key) => {
  console.log(key);
});

//question 9

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(salaries) {
  let total = 0;
  for (let salary of Object.values(salaries)) {
    total += salary;
  }
  return total;
}

console.log(sumSalaries(salaries));

function topEarner(salaries) {
  let highestSalary = 0;
  let topEarnerName = "";
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > highestSalary) {
      highestSalary = salary;
      topEarnerName = name;
    }
  }
  return topEarnerName;
}

console.log(topEarner(salaries));

//question 10

const today = new Date();

console.log("Current time is " + today.toLocaleTimeString());

console.log(today.getHours() + " hours have passed so far today");

const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + " minutes have passed so far today");

const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(secondsPassed + " seconds have passed so far today");

const birthday = new Date("1995-11-27");
let days = today.getDate() - birthday.getDate();
let months;
let years;

if (days > 0) {
  months = today.getMonth() - birthday.getMonth();
  if (months > 0) {
    years = today.getFullYear() - birthday.getFullYear();
  } else {
    years = today.getFullYear() - birthday.getFullYear();
    months = months * -1;
  }
} else {
  days = days * -1;
  months = today.getMonth() - birthday.getMonth();
  if (months > 0) {
    years = today.getFullYear() - birthday.getFullYear();
  } else {
    years = today.getFullYear() - birthday.getFullYear() - 1;
    months = months * -1;
  }
}

console.log(`I am ${years} years, ${months} months and ${days} days old`);

function daysInBetween(date1, date2) {
  const diffDays = Math.round(
    Math.abs((date1 - date2) / (24 * 60 * 60 * 1000))
  );
  return diffDays;
}

const date1 = new Date("2024-01-01");
const date2 = new Date("2024-02-19");
console.log(
  `There are ${daysInBetween(date1, date2)} days in between date1 and date2.`
);
