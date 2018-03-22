//Variables

var name = 'John';
var age = 26;

//now let's print these 2 together on the console

console.log(name + age);

//add numbers and strings together with the plus sign

//converts number into a strings
//diff data types mixed together

//type coersion: js converts some data types to another on the fly when it needs it

console.log(age + age);
//it will simply add these numbers
//output in blue

var job, isMarried;
console.log(job);
//undefined

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' year old' + job + ' is he married? ' + isMarried + '.');



//changing the value of Variables

//this is called variable Mutation

//at this point we see the old values


age = 'thirty six';
job = 'driver';
//at this point we see different values
console.log(name + ' is a ' + age + ' year old' + job + ' is he married? ' + isMarried + '.');
//we do not need to use var, cause they were already declared.

//this means our code is read as a sequence of instructions
//top to bottom, line by line
//changes will be reflected after the changes!

var lastName = prompt('what is the last name?');//function we can use
console.log(lastName);//output of var we just undefined

//one more

alert(lastName);//prints value to it's own pop up window
