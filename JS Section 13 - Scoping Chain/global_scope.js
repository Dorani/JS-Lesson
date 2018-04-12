var a = 'hello';//global scope
first();//global scope

function first() {
  var b = 'hi!';//first() scope + variable object global
  second();

  function second(){
    var c = 'hey!';//second scope
    console.log( a + ' ' + b + ' ' + c)//second scope
  }//local scope
}

//first scope and second scope are local scopes, the second has acceess to the first and the global
//a scope has access to the scope to the function in which it sits lexically
//scope chain: all the variable objects that an execution context has access to
//this is lexcial scoping
