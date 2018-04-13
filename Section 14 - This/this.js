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

//------------------------------------//
