//Blocks and IIFES
//Achieving data privacy

//ES6
{
  const a = 1
  let b = 2;
  var c = 3;
}

console.log(a + b);//error
//these values are not accesible from outside the block
//like an iife!
console.log(c)//3 - Because with var declarations, it doesnt matter if there inside of a block
//or if they are not, because they are 'function scoped'

//----------------//
//ES5
(function(){
  var c =3;
})();
console.log(c);//also an error
