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

function foo() {
  var age = 65;
  console.log(age);
}

foo();
console.log(age);

//What happens in the above example?

//line 42 result is 65
//line 46 result is 23

//Age variable on line 34 gets stored in the global execution context object
// The foo function gets its own execution context object in which we can also stores
// an age variable and it can be the same name cause it doesnt matter they are different varibales
//defined in different variable objects, which is why resuts are different
