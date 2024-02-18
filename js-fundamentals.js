//Question 1

let a1 = "" + 1 + 0;
// answer = 10
console.log(a1);
let b1 = "" - 1 + 0;
//answer = -1
console.log(b1);
let c1 = true + false;
// answer = 1;
console.log(c1);
let d1 = !true;
// answer = false
console.log(d1);
let e1 = 6/"3";
// answer = 2
console.log(e1);
let f1 = "2" * "3";
// answer = 6;
console.log(f1);
let g1 = 4 + 5 + "px";
// answer = 9px
console.log(g1);
let h1 = "$" + 4 + 5;
// answer = $45
console.log(h1);
let i1 = "4" - 2;
// answer = 2
console.log(i1);
let j1 = "4px" - 2 ;
//answer = NaN
console.log(j1);
let k1 = "  -9  " + 5;
// answer = (  -9  5)
console.log(k1);
let l1 = "  -9  " - 5;
// answer = -14
console.log(l1);
let m1 = null + 1;
// answer = 1
console.log(m1);
let q1 = undefined + 1
// answer = NaN
console.log(q1);
let n1 = undefined == null;
// answer = true
console.log(n1);
let o1 = undefined === null;
// answer = false
console.log(o1);
let p1 = " \t \n" - 2;
// answer = -2
console.log(p1);

//Question 2

let three = "3";
let threeUpdated = 3;
let four = "4";
let fourUpdated = 4;
let thirty = 30;
 
//what is the value of the following expressions? 
let addition = three + four;
//answer = 34 however we want to get 7
console.log(addition);
let addtionCorrection = threeUpdated + fourUpdated;
console.log(addtionCorrection);

let multiplication = three * four;
//answer = 12
console.log(multiplication);

let division = three / four ;
//answer = 0.75
console.log(division);

let subtraction = three - four ;
//answer = -1
console.log(subtraction); 

// first less than statement works as it takes the first value and compares them.
let lessThan1 = three < four ;
//answer = true
console.log(lessThan1);

// the 2nd statement does not as it only took the first value and not the total value as a number as such we need to change it to be a number
let lessThan2 = thirty < fourUpdated;
//answer = false
console.log(lessThan2);

//Question 3

if (0) console.log('#1 zero is true');
//does not print
// the value 0 is considered to be false so it will not print with the if statement 
else console.log('#1 zero is false');
// the else statement above proves it

if ("0") console.log('#2 zero is true');
//will print
// the value "0" is a string and a string is true

if (null) console.log('null is true');
//does not print
//null is not a value and as such cant be true

if (-1) console.log('negative is true');
//will print
// -1  is true as there is a value that is not 0

if (1) console.log('positive is true');
//will print 
// 1 is true as there is a value that is not 0 as well

//Question 4

let a = 5, b = 7; 
let result = `${a} + ${b} is `; 
 
// if (a + b < 10) { 
//   result += 'less than 10'; 
// } else { 
//   result += 'greater than 10'; 
// }

result = ((a+b)<10)? (result += 'less than 10') : (result +=  'greater than 10');
// the += add the value of the string to the original string at the end.

console.log(a);
console.log(b);
console.log(result);

//Question 5

const getGreeting = function(name) { 
    return ('Hello ' + name + '!'); 
}
//using function expression

const getGreetingArrow = (name) => {return ('Hello ' + name + '!')}; 
//using arrow function

console.log(getGreeting('expression'));
console.log(getGreeting('arrow'));

//Question 6

const westley = { 
    name: 'Westley', 
    numFingers: 5 
} 
const rugen = { 
    name: 'Count Rugen', 
    numFingers: 6 
} 
 
const inigo = { 
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {  
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; 
        console.log(greeting + this.getCatchPhrase(person)); 
    }, 
    getCatchPhrase:(person) => ((person.numFingers === 6)?
        'You killed my father. Prepare to die.' : 'Nice to meet you.'
    )
} 
 
inigo.greeting(westley) 
inigo.greeting(rugen)

//Question 7

const basketballGame = { 
    score: 0,
    fouls: 0, 
    freeThrow() { 
        this.score++; 
        return this;
    }, 
    basket() { 
        this.score += 2; 
        return this;
    }, 
    threePointer() { 
        this.score += 3; 
        return this;
    },
    foul(){
        this.fouls += 1;
        return this;
    },
    halfTime() { 
        console.log('Halftime score is '+this.score+' Number of fouls is '+this.fouls); 
        return this;
    },
    fullTime(){
        console.log('Fulltime Score is '+this.score+' Number of fouls is '+this.fouls);
        return this;
    }
};
 
basketballGame.basket().freeThrow().freeThrow().foul().basket().threePointer().halfTime().foul().foul().basket().threePointer().basket().fullTime();

const sydney = { 
    name: 'Sydney', 
    population: 5_121_000, 
    state: 'NSW', 
    founded: '26 January 1788', 
    timezone: 'Australia/Sydney' 
};
const perth = { 
    name: 'Perth', 
    population: 1_310_519, 
    state: 'WA', 
    founded: '26 Feburary 1821', 
    timezone: 'Australia/Perth' 
};
function showCity(city){
for(let key in city){
    console.log(key + ':' + city[key]);
}
};
showCity(perth);
showCity(sydney);

let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
let dog1 = 'Bingo'; 
let cat1 = { name: 'Fluffy', breed: 'Siberian' };


// let moreSports = teamSports;
let moreSports = [...teamSports];
// created a shallow copy to ensure that the original data stays

moreSports.push('Soccer', 'Basketball');
moreSports.unshift('Tennis', 'Swimming');

console.log(moreSports);
console.log(teamSports);

let dog2 = dog1;
dog2 = 'Bob';

console.log(dog1);
console.log(dog2);

let cat2 = {...cat1};
cat2.name = 'Tiny';
// created a shallow copy to ensure that the original data stays

console.log(cat1);
console.log(cat2);



function Person(name, age) { 
    this.name = name; 
    this.age = age; 
    this.human = true; 
} 

class PersonClass{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive() {
        return this.age >= 18;
    }
}

var person1 = new Person('Alan', 35);
var person2 = new Person('Bob', 22);
var person3 = new PersonClass('Charlie', 42);

console.log('Person 1:', person1.name, person1.age, person1.human);
console.log('Person 2:', person2.name, person2.age, person2.human);
console.log('Person 3:', person3.name, person3.age, person3.human);
console.log('Can this person drive:',person3.canDrive());
