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
function driversLicense(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;

    console.log(firstName + ' born in ' + yearOfBirth + ', and can drive!');
  }
}

driversLicense(true);
