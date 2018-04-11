var a = 'hello';//global scope
first();//global scope

function first() {
  var b = 'hi!';//first() scope + variable object global
  second();

  function second(){
    var c = 'hey!';
    console.log( a + ' ' + b + ' ' + c)
  }//local scope
}
