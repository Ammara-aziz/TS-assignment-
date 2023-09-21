"use strict";
/*Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object
containing these two pieces of information. */
function makealbum(artistname, albumtitle) {
    return {
        artistname,
        albumtitle,
    };
}
console.log(makealbum("Artist", "Albumtitle"));
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Print each album's information
console.log(make_album("Allama Iqbal", "Shiqwa Jwab Shiqwa", 10)); // Includes the number of tracks
console.log(make_album("Ustad Allah Bux", "Fantasy ")); // Default: no number of tracks
console.log(make_album("Ed Sheeran", "Divide", 20)); // Includes the number of tracks
