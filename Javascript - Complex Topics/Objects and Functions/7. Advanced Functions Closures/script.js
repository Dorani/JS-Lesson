//Closures:

//Let's write a small function that returns a function, which calculates how many years we have until retirement

function retirement(retirementAge){//pass into it the age at which someone can officially retire
    var a = 'years left until retirement';
    return function(yearOfBirth){//return an annomous function, with a parameter
      var age = 2018 - yearOfBirth;
      console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);//42 years left until retirement
//or
retirement(66)(1990);//42 years left until retirement

//Our inner function, is able to use the retirement variable and a variable of the "retirement" function that is already returned
//this is what a closure is!
