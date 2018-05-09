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
