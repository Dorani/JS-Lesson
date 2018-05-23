//Rest Parameters
//Allow us to pass an arbritratry number of arguments into a function
//Then use those arguments in that function

//They are the exact oposite of spread operators but have similar syntax
//The spread operator takes an array and transforms it into a single value
//The rest Parameters receive a couple of single values and transforms them into
//an array when we call a function with multiple Parameters




//Example: function that receives an arbritratry number of years and then prints
//to the console whether each person corresponding to these years is greater than 21


                          //ES5
function isFullAge5() {
  console.log(arguments);
  //transforing arguments into an array with this es5 hack
  var argsArr = Array.prototype.slice.call(arguments);
}

isFullAge5(1990, 1999, 1965);//1990, 1999, 1965 = arguments variable
//arguments is an 'array' like structure but NOT an array
