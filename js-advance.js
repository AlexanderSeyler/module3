//question 1
function makeCounter(startfrom = 0, incrementBy = 1) {
  let currentCount = startfrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();

counter1(); // 1
counter1(); // 2

let counter2 = makeCounter(10, 5);

counter2(); // 15
counter2(); // 20

//question 2
// const delayMsg = (msg) => {
//   console.log(`This message will be printed after a delay: ${msg}`);
// };
// setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
// delayMsg("#4: Not delayed at all");
// //print order is 4th,3rd,2d,1st
// //the longer the delay the later the message gets printed in the order. A 0ms delay is still longer than no delay.
// clearFifthMsg = setTimeout(delayMsg, 12000, "#5: Delayed by 12000ms");
// clearTimeout(clearFifthMsg);

//question 3

// function debounce(func) {
//   let timeout;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(context, args);
//     }, 1000);
//   };
// }

// function printMe() {
//   console.log("printing debounced message");
// }

// printMe = debounce(printMe);
// function debounce(func, ms) {
//   let timeout;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(context, args);
//     }, ms);
//   };
// }

// function printMe() {
//   console.log("printing debounced message");
// }

// printMe = debounce(printMe, 1000);

// function debounce(func, ms) {
//   let timeout;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(context, args);
//     }, ms);
//   };
// }

// function printMe(msg) {
//   console.log(`printing debounced message: ${msg}`);
// }

// printMe = debounce(printMe, 1000);

// setTimeout(() => printMe("First"), 100);
// setTimeout(() => printMe("Second"), 200);
// setTimeout(() => printMe("Third"), 300);

//question 4
// function printFibonacci() {
//   let prev = 0;
//   let curr = 1;
//   let count = 0;

//   const intervalId = setInterval(() => {
//       console.log(curr);
//       const next = prev + curr;
//       prev = curr;
//       curr = next;
//       count++;
//   }, 1000);

//   return intervalId;
// }

// printFibonacci();

// function printFibonacciTimeouts() {
//   let prev = 0;
//   let curr = 1;
//   let count = 0;

//   function printNext() {
//     console.log(curr);
//     const next = prev + curr;
//     prev = curr;
//     curr = next;
//     count++;
//     setTimeout(printNext, 1000);
//   }

//   printNext();
// }

// printFibonacciTimeouts();

function printFibonacci(limit) {
  let prev = 0;
  let curr = 1;
  let count = 0;

  const intervalId = setInterval(() => {
    console.log(curr);
    const next = prev + curr;
    prev = curr;
    curr = next;
    count++;
    if (count === limit) {
      clearInterval(intervalId);
    }
  }, 1000);
}

printFibonacci(10);

//question 5
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
setTimeout(() => car.description(), 200);
car = { ...car, year: 2000 };
setTimeout(car.description.bind(car), 200);
let newerCar = car.description.bind(car);
setTimeout(newerCar, 200);
car = { ...car, year: 1900 };

//question 6
Function.prototype.delay = function (seconds) {
  const originalFunction = this;

  return function (...nums) {
    setTimeout(() => {
      originalFunction.apply(this, nums);
    }, seconds);
  };
};

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

multiply.delay(500)(2, 3, 4, 5);

//question 7
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.toString = function () {
    return `${this.name} is ${this.age} years old and is ${this.gender}`;
  };
}

const person1 = new Person("Joe", 13, "male");
const person2 = new Person("Sally", 55, "female");

console.log("person1: " + person1);
console.log("person2: " + person2);

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

Student.prototype.toString = function () {
  return `${this.name} is ${this.age} years old, is ${this.gender}, and is in cohort ${this.cohort}`;
};

const student1 = new Student("John Doe", 20, "male", "cohort 1");
const student2 = new Student("Alice Johnson", 22, "female", "cohort 2");

console.log("student1: " + student1);
console.log("student2: " + student2);

//question 8

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "08:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
    this.alarmSet = false;
  }

  start() {
    super.start();
    setInterval(() => {
      let date = new Date();
      let [hours, mins] = [date.getHours(), date.getMinutes()];
      let currentTime = `${hours < 10 ? "0" + hours : hours}:${
        mins < 10 ? "0" + mins : mins
      }`;
      if (currentTime === this.wakeupTime && !this.alarmSet) {
        console.log("Wake Up!");
        this.stop();
        this.alarmSet = true;
      }
    }, 1000);
  }
}
// const myClock = new DigitalClock("my clock:");
// myClock.start();

// const preciseClock = new PrecisionClock("precise clock:");
// preciseClock.start();

// const alarmClock = new AlarmClock("alarm clock:", "09:00");
// alarmClock.start();

//question 9
function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 20) + 1; // Random delay between 1 and 20 seconds
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay * 1000);
  });
}

randomDelay()
  .then((delay) =>
    console.log(`There appears to have been a delay of ${delay} seconds.`)
  )
  .catch((delay) =>
    console.log(
      `There was a delay of ${delay} seconds, but it ended in failure.`
    )
  );

randomDelay()
  .then((delay) =>
    console.log(`There appears to have been a delay of ${delay} seconds.`)
  )
  .catch((delay) =>
    console.log(
      `There was a delay of ${delay} seconds, but it ended in failure.`
    )
  );

//question 10
import fetch from "node-fetch";

async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

(async () => {
  try {
    const data = await fetchURLData(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
})();

async function fetchAllURLsData(urls) {
  try {
    const fetchPromises = urls.map((url) => fetchURLData(url));
    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    throw new Error(error.message);
  }
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
];

(async () => {
  try {
    const data = await fetchAllURLsData(urls);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
})();
