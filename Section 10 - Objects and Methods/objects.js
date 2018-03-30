//Objects and methods
//What else can objects hold?
  //other objects
  //Arrays
  //functions


function calculateAge(yearOfBirth){
  var age = 2018 - yearOfBirth;
  return age;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1967);
var ageMarry = calculateAge(1877);
console.log(ageJohn);
console.log(ageMike);
console.log(ageMarry);


//VERSION 1:

//strings numbers and booleans
var person = {
  name: 'john',
  lastName: 'smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['jane', 'mark', 'sammy', 'kenny', 'james'],//array of person john's family
  calculateAge: function(){//function expression, inside of an object, since we have key value pairs we do not have the assignment opperator(=) but we have :
      return 2018 - this.yearOfBirth;//this refers to the object person with the calculateAge method
  }
};
console.log(person);//log the entire array
console.log(person.family);//.notation to isolate the array
console.log(person.family[2]);//isolate even further for a specific element of the array in the person object

//lets call the functions
//console.log(person.calculateAge(1990));
//objects can contain functions, and these functions are called methods:
//associated to arrays

console.log(person.calculateAge());//no parameters in the function
//we call the method and didn't pass in any parameters because the value is already in the person object

var age = person.calculateAge();
//assign a value
person.age = age;
//inject that key-value into the object
//check the console to see the value that was calculate.




//VERSION 2:
var person = {
  name: 'john',
  lastName: 'smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['jane', 'mark', 'sammy', 'kenny', 'james'],//array of person john's family
  calculateAge: function(){//function expression, inside of an object, since we have key value pairs we do not have the assignment opperator(=) but we have :
      this.age = 2016 - this.yearOfBirth;//this refers to the person obj, create the new property called age, calculate this value and assign it to the age property
      //return 2018 - this.yearOfBirth;//this refers to the object person with the calculateAge method
  }
};
