//The this variables
  //Regular function call: the this keyword points at the global objet(the window object in the browser)

  //Method call: (function attached to an object) : the this variable points to the object that is calling the Method

  //The this keyword is not assigned a value until a function where it is defined is actually called
  //It is attached to the execution context, which is only created as soon as a function is invoked(called)


console.log(this);//the default object, with many properties

//This in action

calculateAge(1985);

function calculateAge(year){
  console.log(2016 - year);
  console.log(this);//once again it is the window object, why? because this is a regular function call which points to the window object
}
//this function is attached to the global object
//when it is a function declaration
//------------------------------------//

//Method, function expression:

var  john = {
  name: 'john',
  yearOfBirth: 1990,
  calculateAge: function(year){
      console.log(this);//this will refer to the john object that calls the method
      console.log(2016 - this.yearOfBirth);

      function innerFunction(){
          console.log(this);//back to being the window object - when a regular function call happens, the default object is the window object, even if it is writen inside a method
      }
      innerFunction();
  }
}
john.calculateAge();
