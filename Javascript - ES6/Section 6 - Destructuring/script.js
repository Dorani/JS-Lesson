//Destructuring:

//Convenient way to extract data from a data structure like an object
//or an array.

//Imagine we had an array stored with data and say we want to store
//each of the elements of that array in a single variable


//ES5:

var john = ['john', 26];
var name = john[0];
var age = john[1];


//ES6

const [name, age] = ['John', 26];
//creates a constant called name and age, then data is stored in each of those variables
console.log(name);
console.log(age);
//john
//26

// left side destructus data stucture and right side builds a new one

//With an Object:

const obj = {
  firstName: 'john',
  lastName: 'smith'
};

const{firstName, lastName} = obj;//creates 2 brand new constants
//which stores the data out of the object
console.log(firstName);
console.log(lastName);
//john
//smith
