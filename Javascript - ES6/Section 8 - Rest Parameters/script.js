//Rest Parameters
//Allow us to pass an arbritratry number of arguments into a function
//Then use those arguments in that function

//They are the exact oposite of spread operators but have similar syntax
//The spread operator takes an array and transforms it into a single value
//The rest Parameters receive a couple of single values and transforms them into
//an array when we call a function with multiple Parameters




//Example: function that receives an arbritratry number of years and then prints
//to the console whether each person corresponding to these years is greater than 18 or fullage/adult


                          //ES5
function isFullAge5() {
  console.log(arguments);//arguments is an 'array' like structure but NOT an array
  //transforing arguments into an array with this es5 hack
  var argsArr = Array.prototype.slice.call(arguments);
  //loop through array and calculate if each person is greater than 18 or full age/adult
  argsArr.forEach(function(cur){
    console.log((2018 - cur ) >= 18);
  })
}

isFullAge5(1990, 1999, 1965);//1990, 1999, 1965 = arguments variable
//TRUE, FALSE, TRUE



                          //ES6
//using the rest Parameter operator ... then the name of variable
function isFullAge6(...years){//tranform arguements into an array as soon as function is called, then pass it into function
  years.forEach(cur => console.log((2018 - cur)) >= 18);//loop through and say that we want 2018 - cur element and see if itsgreater than 18
}
isFullAge5(1990, 1999, 1965);
//now we see that this will log an array to the console as the data structure
//so we already skip the step to slice etc.. very handy!

//true, false, true
