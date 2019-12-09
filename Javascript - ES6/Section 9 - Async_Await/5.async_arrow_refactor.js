async function fectchAlbums() {
  //make a request and assign it to a variable
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums")
    //calling json on our res var and assigning it to json
    const json = await res.json()
    //then consoling out the response
    console.log(json)
}
fectchAlbums();


//Async await arrow function style refactor:

const fectchAlbums = async () => {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums")
    const json = await res.json();

    console.log(json)
}
fectchAlbums();
