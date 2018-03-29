//Arrays:


//We sometimes had diff variables for diff people
//If we can bundle these into one single variable that would be awesome....
  //we can:

var names = ['john', 'jane', 'mark'];
//before we made 3 different variables
//instead we have an array with 3 strings

var years = [1999, 1969, 1948];

//Now to access the values in the array we do the following:
//we use the [] and put the order number of the element we want to retrive
//In JS arrays are 0 based:
  //1st element has index number of 0

console.log(name[0]);
//john

//to change/mutatate a value in the array

names[1] = 'ben'
console.log(names);
//'john', 'ben', 'mark'

//one array can hold more than one data type:

var john = ['john', 'smith', 1990 , 'teacher', false];
//strings numbers and booleans all in the same array

//push methodadds element at end of array
john.push('blue');
console.log(john);
//'john', 'smith', 1990 , 'teacher', false, blue

//unshift method adds an element at begining of array
john.unshift('mr');

//pop method removes last element from the array
john.pop();

//shift method removes 1st element of the array
john.shift();
