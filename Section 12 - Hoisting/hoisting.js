//------------ HOISTING -------------------//
//THIS IS FUNCTION HOISTING


calculateAge(1965);

//function declaration:
function calculateAge(year) {
  console.log(2018 - year);
}

//calculateAge(1999);

    //Behind the scenes:
    //In the creation phase of the execution context: Global execution context:
    //The function declaration calculateAge is stored in the variable object, before the code is executed
    //This is why when we then enter the execution phase, the calculateAge function is already available to us
    //to use it so we do not need to declare it.


//function expression:

var retirement = function(year){
  console.log(65 - (2018 - year));
}

retirement(1990);
    //This means that hoisting only works for function declarations



//THIS IS VARIABLE HOISTING
console.log(age);
var age = 23;
console.log(age);
    // In the creation phase, of the variable object, the code is scanned for variable
    // declaration and then the variables are then set to undefined
    // JS knows there will be an age variable, but we sinply dont know the value yet
