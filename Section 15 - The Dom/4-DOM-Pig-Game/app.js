/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

                          //Part 1:

//1.How to create our fundamental game variables
//2.How to generate a random number
//3.How to manipulate the Dom
//4.How to read from the Dom
//5.How to change css styles

//---------1.How to create our fundamental game variables-----------------//
var scores, roundScore, activePlayer;

scores = [0,0]//setting both players scores to 0
roundScore = 0;//round score
activePlayer = 0;//0 will be the first player, 1 will be the second

//-----------2.How to generate a random number--------------//

//var dice = Math.floor(Math.random() * 6) + 1;//generate a random number between 1 and 6, remove decimals by using the floor method
// console.log(dice);
//--------3.How to manipulate the Dom------------------//

// document.querySelector('#current-' + activePlayer).textContent = dice;//selects stuff exactly the way we do in css, we selected the score-0 element
//when we change the active player, the score will be printed in the other label

//Another way: putting html in the selected element, we use the inner html method instead of textContent
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';//writing the html needs to be a string, so the parser understands its html code,makes italic text

//--------------4.How to read from the Dom-----------------//

// var x = document.querySelector('#score-0').textContent;//read the content of the element with the id score 0 and store it into variable x
// console.log(x);

//--------------5.How to change css styles-----------------//
 document.querySelector('.dice').style.display = 'none';
//removing dice img
//1st style method, then css property then attribute a value in quotes to the property


                        //PART 2:

//1.How to set up an event handler
//2.What a callback function is
//3.What an annomous function is
//4.Another way to select elements by ID
//5.How to change the image in an img element



//-----------1.How to set up an event handler------------//

// function btn(){
//   //do something
// }
// btn();

//4.Another way to select elements by ID

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//1.2callback function style: external function called by event lsner
//document.querySelector('.btn-roll').addEventListener('click', btn);

//3.annomous function: no named, can be reused
document.querySelector('.btn-roll').addEventListener('click', function(){
  //1.random number
  var dice = Math.floor(Math.random() * 6) + 1;
  //2.display result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
  //3.update round score, if the rolled number was not a 1

});
