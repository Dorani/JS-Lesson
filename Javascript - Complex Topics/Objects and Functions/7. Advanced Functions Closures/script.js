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
//retirement(66)(1990);//42 years left until retirement

//Our inner function, is able to use the retirement variable and a variable of the "retirement" function that is already returned
//this is what a closure is!


var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);


//--------------------------------------------------------------------

function interviewQuestion(job){
  return function(name) {
    if ( job === 'designer'){
      console.log(name + ' , can you please explain what UX is?');
    } else if (job === 'teacher'){
      console.log('what subject do you teach,' + name + '?');
    } else {
      console.log('hello' + name + ', what do you do?');
    }
  }
}

interviewQuestion(teacher)('john');//what subject do you teach john?
//this function call will return the function(name)
//then we call the function with the john parameter
// and the execution context will close in over the variable object over the function we called before, var defined ie job var,
//we can use job var in our if else  in our inner function

//the power of closure! much cleaner
