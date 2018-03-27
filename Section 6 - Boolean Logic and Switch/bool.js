//Boolean logic and switch

var age = 16;

if (age < 20){
  console.log('John is a teen');
} else {
  console.log('John is a man');
}

//go over boolean logic
 age >= 20;
 //false
 age < 30;
 true
 !(age < 30);
 //false


 age >= 20 && age < 30;// and operator rules - because they are not both true
 //false
 age >= 20 || age < 30;//or operator results when just one is true
 //true


 //What if we want to see if john is between 20 and 30 also

 var age = 21;

 if (age < 20){
   console.log('John is a teen');
 } else if ( age > 20 && age < 30) {
   console.log('John is a young man.')
 } else {
   console.log('John is an old man');
 }


var job = 'teacher';
switch (job) {
  case 'teacher':
    console.log('john teaches kids');
    break;
  case 'driver':
    console.log('john drives a cab to work');
    break;
  case 'cop':
    console.log('john helps fight crime');
    break;

  default://like else statement
    console.log('john does something else');


  //as soon as we find the correct case we break out and finish it

}
