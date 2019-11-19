function fectchAlbums() {
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then(json => console.log(json))
}

//Refactor, es2017, async/await, designed to handle async code


//Once you have identified your asynchronous code, do the following:

// step 1
//Put 'async' in front of our function.
//This tells our interpreter that the following
//function we are  about to declare constains async code


//Step 2:
//Identify all the promises that are created within that function
//we have 2, one created by calling fetch, another by callin res.json
//in front of those promises add 'await' and then we assign them to 2 variables
async function fectchAlbums() {
  //make a request and assign it to a variable
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums")
    //calling json on our res var and assigning it to json
    const json = await res.json()
    //then consoling out the response
    console.log(json)
}
