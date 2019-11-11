//We want to be able to calculate the anual rent cost of a home by using
//the monthly(argument)rent:

//invoke it and assign it to a variable which will represent an apt

//console log the apt


//Then create a function that will account for:
  // rent, salary, and a person's name
  // and calculate our bottom line in regards to our rent and salary


// invoke it, do not forget to pass in actual values for our arguments



//test it and out and explore!


function anualRent(monthly){
  var anual = monthly * 12;
  return anual;
}
var threeHudsonPlace = anualRent(3500);
console.log('Anual rent for 3 hudson is: ' + threeHudsonPlace);
console.log('-------------------------------------')


function fixedCost(rent, salary, name) {
    var bottomLine = salary - anualRent(rent);

    console.log(bottomLine);
    //Display P&L
    if (bottomLine > 0){
      console.log('P&L: ' + "+" + bottomLine);
    } else {
      console.log('P&L: ' + "-" + bottomLine);
    }
    //Check if we are over or under budget
    if (bottomLine > 0){
      console.log(name + " " + "We are in the green! ");
    } else {
      console.log('You are in the red...')
      console.log(name + " you need bankroll management... ")
    }
}

fixedCost(3500, 100000, "Seif");
