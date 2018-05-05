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
