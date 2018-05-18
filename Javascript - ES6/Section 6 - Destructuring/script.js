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

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);
//returns the same

//-------------------------------------------------------------


//Example: a function that returns the age of a person
//as well as the remaining time before retirement

//based on a year that we input
//new date created and gave it a constant

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;//instead of hardcoding, get current date and use that to calc retirement
  return [age, 65 - age];//return an array with this data
}

//using destructing to store it into diff variables

const [age, retirement] = calcAgeRetirement(1990);
console.log(age);//28
console.log(retirement);//37

//these are the 2 return values that come from our function
//destructing is a good solution for this case
