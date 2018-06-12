//Default Parameters
  //We use them whenever we want one or more parameters of a functions
  //to be preset - ie: default values


                    //ES5 - STYLE:
//constructor function that takes 4 parameters

function SmithPerson(firstName, yearOfBirth,
   lastName, nationality) {

     //defaulting parameters
     //if lastName is undefined
     //then let the lastName be Smith
     //else its simply lastName
     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
     nationality === undefined ? nationality = 'American' : nationality = nationality;

     this.firstName = firstName;
     this.yearOfBirth = yearOfBirth;
     this.lastName = lastName;
     this.nationality = nationality;
   }

//use the function constructor and create a new person called John

var John = new SmithPerson('John', 1990); //assigned undefined for the non passed in params
//console:
//{firstName: "John", yearOfBirth: 1990, lastName: "Smith", nationality: "American"}

//we only called the SmithPerson function constructor with 2 arguements
//but we still have 4 defined, because we implimented something similar to default Parameters

//To override:

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
//this will override the default parameters


                    //ES6 - STYLE:
