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
