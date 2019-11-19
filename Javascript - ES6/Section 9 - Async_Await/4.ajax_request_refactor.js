function fectchAlbums() {
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then(json => console.log(json))
}

//Refactor, es2017, async/await, designed to handle async code


//Once you have identified your asynchronous code, do the following:

// step 1
//This tells our interpreter that the following function we are
//about to declare constains async code

async function fectchAlbums() {
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then(json => console.log(json))
}
