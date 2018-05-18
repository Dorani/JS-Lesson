//Select the boxes


//isolate those elements with that box class name to select them all
const  boxes = document.querySelectorAll('.box');
//returns a node list
//so we need to transform it into an array

//we called the slice method on the array prototype and setting the 'this variable'
//to the boxes in this case

                      //ES5:

var boxesArr5 = Array.prototype.slice.call(boxes);
//now we have an Array
//so we can use all the array methods
