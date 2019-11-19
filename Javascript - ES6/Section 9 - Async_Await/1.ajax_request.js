//Write a function to retrieve a blob of jason
//Make an ajax request!
//Use the 'fetch' function


//API: https://rallycoding.herokuapp.com/api/music_albums

//Whenever we make a request with 'fetch', it returns a 'promise'.
//That promise, is resolved with an object that represent the
//underlying request. To get a callback that this is resolved,
//we will chain on a '.then'. to return a response object
//Res.json also returns a promise of it's own, which is resolved
//once we get the data back

function fectchAlbums() {
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then(json => console.log(json))
}

fectchAlbums();
