//ES5

var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller';
console.log(name5);//Jane Miller to demo mutation

//ES6
//-- 2 Methods here, const and let - const meaning constant for values
//-- we do not want to change, and let is like the old var - values we mutatate

const name6 = 'Jane Smith';
let age = 23; //since this value can mutate/change

name6 = 'Jane Miller';
console.log(name6)//error - if we attempt to change the value of a constant
//it will throw an error - Assignment to constant variable...


//ES5
function driversLicense5(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;

    console.log(firstName + ' born in ' + yearOfBirth + ', and can drive!');
  }
}

driversLicense5(true);//John, born in 1990, and can drive!


//ES6
function driversLicense6(passedTest) {
  if (passedTest) {
    let firstName = 'John';
    const yearOfBirth = 1990;

    console.log(firstName + ' born in ' + yearOfBirth + ', and can drive!');
  }
}

driversLicense6(true);//John, born in 1990, and can drive!

//Must remember here that let and const the variables are not function scoped
//but they are 'blocked scoped', within the curly braces, the var declared with let
//and const are are only accesible within inside the block
//also if you define the const and let and then define the value inside, you can with let
//but not const!
