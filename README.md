# liri-node-app

Liri-node-app is a node application for music and movie lovers alike.  It searches song titles on spotify, artist appearances in your town via bandsintown, and movie information on omdb with the use of different commands.   


In order for liri to run the following packages are needed:

            * node-spotify-api
            * moment
            * axios
            * dotenv
## Using Liri

After navigating into the directory on the terminal, type in:
    * node liri
This is essential for running the apllication.  In addition to "node liri", the command line will need two more pieces of information.  The first piece that liri will need is a command.  Liri can take 4 different commands; They are:

            * spotify-this-song
            * concert-this
            * movie-this
            * do-what-it-says

The second piece of information needed is the song name/movie title/artist you would like to look up. The results for your search will be displayed after hitting enter.  If no song or movie title is picked then the search will default to 'The Sign' by Ace of Base if the command is spotify-this-song and Mr. Nobody if the command is movie-this.  

