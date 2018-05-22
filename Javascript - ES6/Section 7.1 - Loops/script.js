//ES5:

var boxesArr5 = Array.prototype.slice.call(boxes);
//now we have an Array
//so we can use all the array methods

//we want to change the boxes to dogerblue
//so we use the forEach method
//callback function, the es5 way, the current element
//change the style-backgroundColor to dogerblue which is a css color name
boxesArr5.forEach(function(cur) {
cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);
//transform this node list to an array, as simple as that
//es6 rocks
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');



//------------------------------------------//

                //ES5 - Loops!

for(var i = 0; i < boxesArr5.length; i++){
if (boxesArr5[i].className === 'box blue'){
continue;//skip iteration of loop and go to next one
}

boxesArr5[i].textContent = 'i changed to blue!';
}


                //ES6 - Loops!


for (const current of boxesArr6)
