//Objects

//With arrays, we can access elements of a certain array, by order number
//But what if we wanted to access elements of an array by a specific name or keyword
//You could't do that, unless you use objects.


//Objects have key value pairs. Used to group variables that belong together with NO
//particular order

//object literal example:

var person = {
  name: 'john',
  lastName: 'smith',
  year: 1990,
  job: 'teacher',
  isMarried: false
};
console.log(person);
//all of these key value pairs as an indivisual variable inside the John object:

//now to retrieve an element inside of an object:

// dot notation

console.log(john.lastName);
//smith
//or this way
console.log(john['lastName']);


//Data mutation:
john.lastName = 'miller';
john['job'] = ['software'];

console.log(john);
//data mutation works in both ways just like arrays

//---------------------
