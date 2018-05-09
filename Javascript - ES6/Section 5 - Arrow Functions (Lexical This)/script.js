                              //ES5:

var box = {
  color: 'green',
  position: 1,
  clickMe: function(){
    //attach event handler to the class of green
    document.querySelector('.green').addEventListener('click',function(){
      var str = 'this is box number ' + this.position + ' and it is ' +
      this.color;
      alert(str);
  });
  }
}

box5.clickMe();
//undefined because this points to the global obj in this particular case
//Only method call with a this keyword, will point to that object
  //However, a regular function call, the this keyword will always point
  //to the global obj


//In the method (function attached to an object) on line 6 we have access to color and position
//But, the callback function inside the event handler, is not a method:
  //its a regular function call, so the this keyword, points at the window global object
  //and so, the position and color attributes are not defined in the window object
  //so..... we get undefined.


//How to avoid the above:

var box5 = {
  color: 'green',
  position: 1,
  clickMe: function(){
    var self = this;//self var points to this - so we can use it later on
    document.querySelector('.green').addEventListener('click',function(){
      var str = 'this is box number ' + self.position + ' and it is ' +
      self.color;
      alert(str);
  });
  }
}

box5.clickMe();
//the box number is 1 and it is green


                              //ES6:

//Arrow functions help us avoid the above hack:
//we have access to the this keyword of this method
//because the arrow function shares the lexical this keyword of its surrounds
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function(){

    document.querySelector('.green').addEventListener('click',() => {
      var str = 'this is box number ' + this.position + ' and it is ' +
      this.color;
      alert(str);
  });
  }
}

box6.clickMe();
