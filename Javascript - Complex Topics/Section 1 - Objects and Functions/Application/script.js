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




//---------------------------------------------------------------------------
//Primitives vs Objects:

//Variables containing primitives, hold that data in themselves, but in objects they contain a reference in a place in memory:
//Primitives:
var a = 23;
var b = a;

a = 46;

console.log(a);//46
console.log(b);//23
//we copied the value of a to b, and when we mutated a, it didnt affect b


//Now with objects:
var obj1 = {
  name: 'john',
  age: 2
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);//30
console.log(obj2.age);//30
//when we set obj1=obj2 we just created a new reference which points to the 1st object


//Now with functions:
var age = 27;
var obj = {
  name:'seif',
  city: 'sf'
};

function change(a,b){
  a = 30;
  b.city = 'new york';
}

change(age,obj);
console.log(age);//27
console.log(obj.city);//new york

//same thing
//we passed the age variable holding a primitive and object var holding a reference to an object into our function
//this function then, as it was invoked, attempted to change the arguments that we passed into it
//when we console log the value, we see the primitive is unchanged, but city goes from sf to new york


//////////////////////////////////////////////////////////////////////////////
//FUNCTIONS:
//array calc function looped through the years array, 5 times, and 5 times the calculateAge function was called and pushed results into new array
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
  var arrRes = [];//empty array
  for ( var i = 0; i < arr.length; i++){//looping through the array
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);//[26, 51, 79, 11, 18]

//now a function that determines if a person is an adult

function isFullAge(el) {
  return el >= 18;
}

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);//[true, true, true, false, true]
