//Primitives vs Objects:

//Variables containing primitives, hold that data in themselves, but in objects they contain a reference in a place in memory:
//Primitives:
var a = 23;
var b = a;

a = 46;

console.log(a);//46
console.log(b);//23
//we copied the value of a to b, and when we mutated a, it didnt affect b


//Now with objects:
var obj1 = {
  name: 'john',
  age: 2
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);//30
console.log(obj2.age);//30
//when we set obj1=obj2 we just created a new reference which points to the 1st object


//Now with functions:
var age = 27;
var obj = {
  name:'seif',
  city: 'sf'
};

function change(a,b){
  a = 30;
  b.city = 'new york';
}

change(age,obj);
console.log(age);//27
console.log(obj.city);//new york

//same thing
//we passed the age variable holding a primitive and object var holding a reference to an object into our function
//this function then, as it was invoked, attempted to change the arguments that we passed into it
//when we console log the value, we see the primitive is unchanged, but city goes from sf to new york
