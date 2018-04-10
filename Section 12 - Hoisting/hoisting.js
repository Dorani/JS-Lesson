//------------ HOISTING -------------------//

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

retirement(1965);

var retirement = function(year){
  console.log(65 - (2018 - year));
}

//retirement(1990);
