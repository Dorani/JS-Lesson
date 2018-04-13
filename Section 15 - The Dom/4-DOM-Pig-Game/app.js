/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Part 1:
//How to create our fundamental game variables
//How to generate a random number
//How to manipulate the Dom
//How to read from the Dom
//How to change css styles


var scores = [0,0]//setting both players scores to 0
var roundScore = 0;//round score
var activePlayer = 0;//0 will be the first player, 1 will be the second
