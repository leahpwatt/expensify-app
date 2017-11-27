//ES6 OBJECT DESTRUCTURING

// const person = {
//   // name: 'Leah',
//   age: 36,
//   location: {
//     city: 'Detroit',
//     temp: 41
//   }
// }

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp } = person.location;

// if (city && temp) {
//   console.log(`It is ${temp} in ${city}.`);
// }

//CAN RENAME VARS

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}.`);
// }

//CAN SET UP DEFAULT VALUES

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}.`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-published' } = book.publisher;

console.log(publisherName); //Penguin, Self-published


//ES6 ARRAY DESTRUCTURING

const address = ['17566 Fairfield Street', 'Detroit', 'Michigan', '48221'];

//matched by position; can leave off later items if you don't intend to use them (i.e. zip); can use comma to denote other values
// const [street, city, state, zip] = address;

const [, , state = 'New York' ] = address;

// console.log(`You are in ${address[1]} ${address[2]}.`);

console.log(`You are in ${state}.`);

//CHALLENGE

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , medium] = item;

console.log(`A medium ${name} costs ${medium}.`);






