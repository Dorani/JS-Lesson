//Strings


let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
  return 2016 - year;
}

//Template literals:
//ES5:
console.log('This is ' + firstName + ' ' + lastName +
'. He was born in ' + yearOfBirth + ', today he is ' +
 calcAge(yearOfBirth) + ' years old.');

 //This is long to write with all the + signs etc....
//----------------------//

//In ES6 we have template literals, ie we use backticks:
//Allows you to write the text within the backticks and the variables!
 console.log(`This is ${firstName} ${lastName}. He was born in
 ${yearOfBirth} and today he is ${calcAge(yearOfBirth)} years old`);
