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
