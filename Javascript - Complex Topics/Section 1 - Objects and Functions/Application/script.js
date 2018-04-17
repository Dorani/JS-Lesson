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

//adding a method to the function constructor prototype property:

Person.prototype.calculateAge = function(){//simply a property and then we add our function
  console.log(2018 - this.yearOfBirth);
}

//Adding a property to a prototype:

Person.prototype.lastName = 'smith';
console.log(john.lastName)
console.log(jane.lastName)
console.log(mark.lastName)

//instances of the person object
//intantiation:
var john = new Person('john', 1990, 'teacher');//how to create new objects using the constructor functions
//new operator create an empty object, then the custrutor function (person) is called with arguments specified.
  //calling a function creates a new "execution context"
  //that has a "this" variable is:
  //pointing to the empty object created with the new operator
  //assigned to the john variable


//create more objects for more people:
var john = new Person('john', 1990, 'teacher');//how to create new objects using the constructor functions
var jane = new Person('jane', 1969, 'designer');
var mark = new Person('mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

//Again, the method, is not in the constructor, and we can still use it!
//Because it is in the prototype property of our function constructor
//This is inheretence in practice

//------------------------------------------------------------------
//Diff way
//Object.create:Creating objects in 2 ways:

  //1st, define an obj that will act as the prototype
  //2nd create the new object based on that very prototype:

var personProto = {
  calculateAge: function(){
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';


//----------------

var jane = Object.create(personProto,
  {
    name: { value: 'jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
  });


//Obj.create builds in obj that inherets directly from the one we passed in the 1st argument
//Function constructor, the newly created obj inherest from the custrutor prototype property
