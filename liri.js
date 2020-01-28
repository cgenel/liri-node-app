require("dotenv").config();

// imports the api keys
var keys = require("./keys.js");

// 
var Spotify = require("node-spotify-api");

// Import the axios npm package.
var axios = require("axios");

// Import the moment npm package.
var moment = require("moment");

// Import the FS package for read/write.
var fs = require("fs");

// Initialize the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);

// function to get the artists name
var getArtistNames = function(artist) {
  return artist.name;
};

// function for running searches on Spotify
var getMeSpotify = function(songName) {
  if (songName === undefined) {
    songName = "What's my age again";
  }

  // when searching spotify for the song name "track"
  spotify.search(
    {
      type: "track",
      query: songName
    },

    // if error return an error
    function(err, data) {
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }

      // songs variable for collecting the data
      var songs = data.tracks.items;

      // for-loop to display all songs with the title entered
      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("artist(s): " + songs[i].artists.map(getArtistNames));
        console.log("song name: " + songs[i].name);
        console.log("preview song: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("-----------------------------------");
      }
    }
  );
};