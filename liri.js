require("dotenv").config();

var moment = require('moment');
var axios = require("axios")
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fileSystem= require('fs')


var userCommand = process.argv[2]
var userRequest = process.argv.slice(3).join('+')

//************************************************************************************************* 

function spotifyCall() {

    if (userRequest === "") {

        function noSongRequested() {
            spotify.search({ type: 'track', query: 'The Sign' }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                } else {
                    console.log('__________________________________________________________________________________')
                    // console.log(data.tracks.items)
                    console.log('Here are your results: ')
                    console.log("Artist: " + data.tracks.items[18].album.artists[0].name);
                    console.log("Album title: " + data.tracks.items[18].album.name);
                    console.log("Listen on Spotify: " + data.tracks.items[18].album.artists[0].external_urls.spotify);
                    console.log('__________________________________________________________________________________')

                }



            });
        }

        noSongRequested()

    } else {

        function songRequested() {

            spotify.search({ type: 'track', query: userRequest }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                } else {
                    console.log('__________________________________________________________________________________')

                    console.log('Here are your results: ')
                    console.log("Song title: " + userRequest.split('+').join(' '))
                    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                    console.log("Album title: " + data.tracks.items[0].album.name);
                    console.log("Listen on Spotify: " + data.tracks.items[0].album.artists[0].external_urls.spotify);
                    console.log('__________________________________________________________________________________')
                }

            });

        }

        songRequested()
    }

}






//************************************************************************************************* 

function bandsInTownCall() {
    var cityIndex = 0
    axios.get('https://rest.bandsintown.com/artists/' + userRequest + '/events?app_id=codingbootcamp')
        .then(function (response) {
            console.log('__________________________________________________________________________________')

            console.log(userRequest.split("+").join(' ') + " will be in " + response.data[cityIndex].venue.city + " on " + moment(response.data[cityIndex].datetime).format('LLLL') + " at the " + response.data[cityIndex].venue.name + ".")
            console.log('__________________________________________________________________________________')

            // console.log(response.data);



        })
        .catch(function (error) {
            console.log(error);
        });
}



//************************************************************************************************* 



function omdbCall() {
    if (userRequest === '') {
        axios.get('http://www.omdbapi.com/?apikey=trilogy&t=mr+nobody')
            .then(function (response) {
                console.log('__________________________________________________________________________________')
                // console.log("hello")
                console.log("Movie Title: " + response.data.Title)
                console.log("Year released: " + response.data.Year)
                console.log("Rated: " + response.data.Rated)
                console.log("Rated: " + response.data.Genre)
                console.log("IMDB Rating: " + response.data.imdbRating)
                console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value)
                console.log("Country of origin:  " + response.data.Country)
                console.log("Language:  " + response.data.Language)
                console.log("Plot: " + response.data.Plot)
                console.log("Actors: " + response.data.Actors)
                console.log('__________________________________________________________________________________')
            })
            .catch(function (error) {
                console.log(error);
            });
    } else {


        axios.get('http://www.omdbapi.com/?apikey=trilogy&t=' + userRequest)

            .then(function (response) {
                console.log('__________________________________________________________________________________')
                // console.log("hello")
                console.log("Movie Title: " + response.data.Title)
                console.log("Year released: " + response.data.Year)
                console.log("Rated: " + response.data.Rated)
                console.log("Rated: " + response.data.Genre)
                console.log("IMDB Rating: " + response.data.imdbRating)
                console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value)
                console.log("Country of origin:  " + response.data.Country)
                console.log("Language:  " + response.data.Language)
                console.log("Plot: " + response.data.Plot)
                console.log("Actors: " + response.data.Actors)
                console.log('__________________________________________________________________________________')
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}


if (userCommand === "spotify-this-song") {

    spotifyCall()

} else if (userCommand === "concert-this") {

    bandsInTownCall()

} else if (userCommand === "movie-this") {

    omdbCall()

} else if (userCommand === "do-what-it-says") {

}