require("dotenv").config();

var axios = require("axios")
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var userAction = process.argv[2]
var userSong = process.argv.slice(3).join('+')

function spotifyCall(){
 
spotify.search({ type: 'track', query: userSong }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log('_________________________________________________________')
console.log("Artist: " + data.tracks.items[0].album.artists[0].name); 
console.log("Album title: "+data.tracks.items[0].album.name); 
console.log( data.tracks.items[0].album.artists[0].external_urls.spotify); 

});
}
if (userAction === "spotify-this-song"){
    spotifyCall()
}