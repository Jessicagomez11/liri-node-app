require("dotenv").config();

var moment = require('moment');
var axios = require("axios")
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var userCommand = process.argv[2]
var userRequest = process.argv.slice(3).join('+')

function spotifyCall(){
 
spotify.search({ type: 'track', query: userRequest }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
} else {
    console.log('__________________________________________________________________________________') 

    console.log('Here are your results: ')
    console.log("Song title: "+ userRequest.split('+').join(' '))
    console.log("Artist: " + data.tracks.items[0].album.artists[0].name); 
    console.log("Album title: "+data.tracks.items[0].album.name); 
    console.log("Listen on Spotify: "+data.tracks.items[0].album.artists[0].external_urls.spotify); 
    console.log('__________________________________________________________________________________') 
}

});

}
//************************************************************************************************* 

function bandsInTownCall(){ 
 var changeCity = 0
    axios.get('https://rest.bandsintown.com/artists/' +  userRequest + '/events?app_id=codingbootcamp')
    .then(function (response) {
        console.log('__________________________________________________________________________________') 

        console.log(userRequest.split("+").join(' ') + " will be in "+ response.data[changeCity].venue.city +" on " + moment(response.data[changeCity].datetime).format('LLLL')+" at the "+ response.data[changeCity].venue.name+".")
        console.log('__________________________________________________________________________________') 

        // console.log(response.data);
       


    })
    .catch(function (error) {
        console.log(error);
    });
}

//************************************************************************************************* 


if (userCommand === "spotify-this-song"){

    spotifyCall()

}else if (userCommand === "concert-this"){

    bandsInTownCall()
    
}else if (userCommand === "movie-this"){

}else if (userCommand === "do-what-it-says"){

}