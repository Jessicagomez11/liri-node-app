require("dotenv").config();

var axios = require("axios")
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var userCommand = process.argv[2]
var userSong = process.argv.slice(3).join('+')

function spotifyCall(){
 
spotify.search({ type: 'track', query: userSong }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
} else {
    console.log('__________________________________________________________________________________') 

    console.log('Here are your results: ')
    console.log("Song title: "+ userSong.split('+').join(' '))
    console.log("Artist: " + data.tracks.items[0].album.artists[0].name); 
    console.log("Album title: "+data.tracks.items[0].album.name); 
    console.log("Listen on Spotify: "+data.tracks.items[0].album.artists[0].external_urls.spotify); 
    console.log('__________________________________________________________________________________') 
}

});

}



if (userCommand === "spotify-this-song"){
    spotifyCall()
}