//Bind, call and apply methods:

//Allow us to call a function and set the this variable manually


var john = {
  name: 'john',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay){
    if (style === 'formal'){
      console.log('Good ' + timeOfDay + ', ladies and gentlemen! Im ' +
          this.name + ' and Im a ' + this.job + ' . Im ' + this.age + ' years old.');
    } else if (style === 'friendly'){
      console.log('Hey, whats up, Im' + this.name + 'Im a ' + this.job + 'and Im ' + this.age + 'years old' +timeOfDay +' ');
    }
  }
};

var emily = {
  name: 'emily',
  age: 35,
  job: 'designer'
};


john.presentation('formal', 'morning');
//---------------------------CALL METHOD----------------------------------------------------------//
//using the call method it allows the seting the this var to emily, so we can use johns method
//method borrowing:
john.presentation.call(emily, 'friendly', 'afternoon');//emily and it works!
//we borrowed the method from john to use on the emily object

//---------------------------APPLY METHOD----------------------------------------------------------//
//Similar to above, except it only accepts arguments as an array:
//ie:
john.presentation.apply(emily, ['friendly', 'afternoon'])//wont work here cause our method does not expect to receive an array

//---------------------------BIND METHOD----------------------------------------------------------//
//allows us to set the this variable explictly
//however, bind doesnt call the function right away, but instead generates a copy of it so we can store it somewhere

//Here, we will use the bind method to create a function with preset arguments and store it in a variable

var johnFriendly = john.presentation.bind(john, 'friendly');//this method returns a function and gets stored in johnFriendly()
johnFriendly('morning');// it worked!
