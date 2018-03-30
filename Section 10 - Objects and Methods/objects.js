//Objects and methods


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




//strings numbers and booleans
var person = {
  name: 'john',
  lastName: 'smith',
  year: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['jane', 'mark', 'sammy', 'kenny', 'james'],//array of person john's family
  calculateAge: function(yearOfBirth){//function expression, inside of an object, since we have key value pairs we do not have the assignment opperator(=) but we have :
      return 2018 -  yearOfBirth;
  }
};
console.log(person);//log the entire array
console.log(person.family);//.notation to isolate the array
console.log(person.family[2]);//isolate even further for a specific element of the array in the person object
//What else can objects hold?
  //other objects
  //Arrays
  //functions
