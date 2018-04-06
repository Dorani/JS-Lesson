//while Loops

var names = ['seif','bane', 'same', 'jeff','bob'];//arrays have properties

//print these out
var i = 0;//counter, before the loop starts
while (i < names.length){//while loops only has the contidion that is evaluated for each loop
  console.log(name[i]);
  i++;//update counter
}


//statements for Loops
  //break: to finish a loop at a certain point
  //continue: quit curent iteration and continue with next one

for ( var i = 1; i <= 5; i++){
  console.log(i);

  if ( i === 3){
    break;//prints 1 2 and 3, then breaks the loop
  }
}

//want to stop this loop up to 3


for ( var i = 1; i <= 5; i++){
  if ( i === 3){
    continue;//goes to next iteration, 4 and 5 will be printed
  }
  console.log(i);
}


var friends = ["seif", "anas", "dounya"]
var newFriends = "emma";

friends.push(newFriends);

//setting new element to the push function
//append new element to end of array

var exFriend = friends.pop();

//remove element from array, removes last element of array before returning it.
//if you pop an empty array = undefined

friends.indexOf("seif");
//to isolate indexOf
