//Loops

//Control structures:
//Imagine you have a repetitive task, instead of writing 10 lines
//of the same code, you can just use a loop:


//Imagine we want to print to the console, the number 0 - 9


//1.start we the intial value of a counter
    //counter = variable that gets updated after each iteration of the Loops
    //we call it i and we start it at 0

//2.condition that is evaluated after each loop iteration
//designed to stop the loop at a certain condition

//3. Updated to the counter
//we simply increase i by 1
for (var i = 0; i < 10; i++){
  console.log(i);
}

//as soon as condition is false, loop stops and no values are printed


//Now, let iterate through a data type, like an array:

var names = ['seif','bane', 'same', 'jeff','bob'];//arrays have properties

for ( var i = 0; i < names.length; i++){//length property, gives us the number of elements in the array
  console.log(names[i]);
}


//build a loop with the reverse order
//start counter variable at the 4th element
//ending condition will update the counter, in this case we will decrease it.
for (var i = names.length - 1; i >= 0; i--){
  console.log(names[i]);
}
//we start at number 4 and go all the way to 0 because the
//condition is that i should be greater or equal to 0
