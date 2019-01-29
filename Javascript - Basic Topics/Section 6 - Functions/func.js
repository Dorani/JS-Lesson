//Functions:

//piece of code we want to run over and over
//functions are like containers that hold lines of code
//we pass arguments in them
//and then output a result

//We want to be able to calculate the age of a person by knowing
//the year at which that person is born:
var calculateAge = function(yearOfBirth){
  var age = 2018 - yearOfBirth;
  return age;
}

calculateAge(1999);

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

//here's an example of creating a new function with 2 arguments passed in
//insde the body we are using a function from above to calculate the age which is stor
function yearsToRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0){
      console.log(name + "" + "retires in " + retirement + " years");
    } else {
      console.log(name + " is already retired. ")
    }
}
//when this function gets called:
  // the first argument will get passed in as 1st parameter of func
  // the second arguments gets passed as 2nd parameter of function

//now in the body of the functin:
  //age is a var declared with the above function with 1990 - (second parameter) as the argument.
yearsToRetirement('john', 1990);
yearsToRetirement('mike', 1967);
yearsToRetirement('mary', 1948);

//so above examples basically show that functions dont necessarily need to return anything
//and functions can call other functions.
