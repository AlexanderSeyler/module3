const subtract = (a, b) => a-b;

const multiply = (a, b) => {return a*b;};

const complex = (a,b,c) => {var x = a*b; return x / c;};

const person = {
    firstName:'Alexander',
    lastName:'Seyler',
    'is a man':true,
    sports:['football','basketball','running','tennis']
}

let newPerson = person;

person.firstName = 'Joe';

console.log(newPerson.firstName);

newPerson.firstName = 'Bob';
console.log(person.firstName);
console.log(newPerson.firstName);


for(let i = 0; i < person.sports.length; i++){
    console.log(person.sports[i]);
}
for (let info in person.sports){
    console.log('info: '+ info);
    console.log('value: '+ person.sports[info]);
}
console.log(person.firstName + ' ' + person.lastName);
console.log(`${person.firstName} ${person.lastName}`);
console.log(person.firstName,person.lastName);
console.log(person.firstName,person.lastName,person['is a man']);
delete person.lastName;
if(person.lastName)
    console.log('has last name');
else
    console.log('doesnt have last name');
console.log(person.lastName);
person.lastName = 'test';
console.log(person.firstName,person.lastName);


console.log(subtract(1,1));

console.log(multiply(2,5));

console.log(complex(1,3,2));