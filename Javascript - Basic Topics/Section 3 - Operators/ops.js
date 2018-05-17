var birthYear = 2016 - 26;

birthYear = 2018 - 26 * 2;
//we are repeating things here no?

//what can we do?
var now = 2018;
birthYear = now - 26 * 2;
console.log(birthYear)

//js does the multiplication
//then the result from 2016, which is now
// why, procedence of operators ( which are executed first, and which later )
//simple math

//visit operator precendence table on MDN

var ageJohn = 30;
var ageMark = 30;

ageJohn = 3 + 5 * 4 - 6;
console.log(ageJohn);
//which takes precendence

//how can we overide this?

ageJohn = (3 + 5) * 4 - 6;
//grouping take priority here
//this is why values are different
console.log(ageJohn);


ageJohn++;
ageMark *= 2;
console.log(ageJohn + ageMark);

//rough start to conditionals:
if (ageJohn < 100) {
  console.log('still got time');
}
