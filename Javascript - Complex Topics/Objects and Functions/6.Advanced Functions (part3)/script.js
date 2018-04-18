//IIFE:

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();//false

//The only purpose here should be to hide the score variable from the outside
//creating a private variable
//we should use an iife :

(function() {//in js what is inside parenthesis, is treated as an expression
  var score = Math.random() * 10;
  console.log(score >= 5);
})();
