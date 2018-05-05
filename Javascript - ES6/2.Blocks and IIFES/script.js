//Blocks and IIFES
//Achieving data privacy
//ES6
{
  const a = 1
  let b = 2;
}

console.log(a + b);//error
//these values are not accesible from outside the block
//like an iife!



//es5
(function(){
  var c =3;
})();
console.log(c);//also an error
