//The spread Operator:
  //Convenient way to expand elements of an array in places like arguments
  //and function calls


//func that takes in 4 arguments
//returns the addition
function addFourAges(a,b,c,d) {
  return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);//81


//Imagine we had an array and not a var
//How can we pass that entire array into the function

                    //ES5:

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);//apply will take the array and call this function using the ages 2 elements
console.log(sum2);//81

                    //ES6:
const sum3 = addFourAges(...ages);//expanding
console.log(sum3)//81
//this spread operator expands the array into its components
// ... = 18,30,12,21



//------------------------------------------------------

//2 arrays with 2 families

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith,'Lily',...familyMiller];
console.log(bigFamily);


//2 nodelists

//h is not a nodelist, its simply a node, because its a query selector, but then the boxes gives use the nodelist, so we use the spread
//operator to expand it then we have the 4 elements stored in the nodelist'


//select this heading and boxes and change text color of all 4 elements to purple

const h = document.querySelector('h1');
const boxes = document.querySelector('.box');

const all = [h, ...boxes];

//transform nodelist into array then loop through it
