//IIFE:

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();//false

//The only purpose here should be to hide the score variable from the outside
//creating a private variable
//we should use an iife :

(function(goodLuck) {//in js what is inside parenthesis, is treated as an expression
  var score = Math.random() * 10;//data privacy
  console.log(score >= 5);
})(5);
//true
//all we want is to create a new scope hidden from outside scope
//we dont interfere with other variables in our global execution context
