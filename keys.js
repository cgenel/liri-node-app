console.log('this is loaded');

// so i spent hours trying to figure out why i kept receiveing an error saying i could not
// initialize spotify client i needed to supply an object containing client id and secre
// i was replacing down below SPOTIFY_ID and SPOTIFY_SECRET for my actualy id and secret lmao literally hours
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
