const person = {
    firstName:'Alexander',
    lastName:'Seyler',
    'is a man':true,
    sports:['football','basketball','running','tennis'],
    car:{make:'ford', model: 'r8', tyres: {num: 4, color: 'black'}},
    carType(){
        console.log(`In my car a ${this.car.make} ${this.car.model}`);
    }
}

function person(first,last){
    this.firstName = first;
    this.lastName = last;
    this.car = {make:'ford', model: 'r8', tyres: {num: 4, color: 'black'}};
    this.carType = () => console.log(`In my car a ${this.car.make} ${this.car.model}`);
}


console.log(person);
person.carType();

const school={
    name: 'IOD',
    location:'Perth'
}

const personClone = {...person, ...school};

// for(let key in person){
//     personClone[key] = person[key];
// }

console.log(personClone);

personClone.firstName = 'Bob';
console.log(personClone.firstName);
console.log(person.firstName);