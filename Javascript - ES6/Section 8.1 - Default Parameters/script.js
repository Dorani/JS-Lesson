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
     lastName === undefined ? lastName = 'Smith' : lastName


     this.firstName = firstName;
     this.yearOfBirth = yearOfBirth;
     this.lastName = lastName;
     this.nationality = nationality;
   }

//use the function constructor and create a new person called John

var John = new SmithPerson('John', 1990); //assigned undefined for the non passed in params
