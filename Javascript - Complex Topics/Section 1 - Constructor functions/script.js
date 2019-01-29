//Function Contructor


var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

//instances of the person object
//intantiation:
var john = new Person('john', 1990, 'teacher');//how to create new objects using the constructor functions
//new operator create an empty object, then the custrutor function (person) is called with arguments specified.
  //calling a function creates a new "execution context"
  //that has a "this" variable is:
  //pointing to the empty object created with the new operator
  //assigned to the john variable


console.log(john);

//adding a method to the function constructor prototype property:
//simply a property and then we add our function

Person.prototype.calculateAge = function(){
  console.log(2018 - this.yearOfBirth);
}

console.log(john);


//Adding a property to a prototype:

Person.prototype.lastName = "smith";
console.log(john.lastName)
console.log(john)



//create more objects for more people:
var john = new Person('john', 1990, 'teacher');//how to create new objects using the constructor functions
var jane = new Person('jane', 1969, 'designer');
var mark = new Person('mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();


Person.prototype.social = 333222999;


console.log(mark);
//Again, the method, is not in the constructor, and we can still use it!
//Because it is in the prototype property of our function constructor
//This is inheretence in practice
