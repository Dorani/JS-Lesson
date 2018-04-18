//FUNCTIONS, accepting functions as inputs:
//array calc function looped through the years array, 5 times, and 5 times the calculateAge function was called and pushed results into new array
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
  var arrRes = [];//empty array
  for ( var i = 0; i < arr.length; i++){//looping through the array
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);//[26, 51, 79, 11, 18]

//now a function that determines if a person is an adult
function isFullAge(el) {
  return el >= 18;
}

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);//[true, true, true, false, true]

//calculateAge max heartrate of adults
function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);//[189,173,154, -1, 195];
