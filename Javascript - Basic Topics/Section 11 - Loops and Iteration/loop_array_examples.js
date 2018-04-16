//------------EXAMPLE 2---------------------//
//create animals array
var animals = ["Lion", "Zebra", "Panda","monkey"];
//itterate through array
for( var i = 0; i < animals.length; i++){
  //print each element of the array
  console.log(animals[i]);
}//outputs each element of array


//-------EXAMPLE 3---------------//
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
