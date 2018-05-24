'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _config = require('./config');

var _util = require('./util');

var search = exports.search = function search(query, type) {

  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type).then(_util.toJSON);
};
var searchArtists = exports.searchArtists = function searchArtists(artists) {
  return search(artists, 'artist');
};
var searchAlbums = exports.searchAlbums = function searchAlbums(albums) {
  return search(albums, 'album');
};
var searchTracks = exports.searchTracks = function searchTracks(tracks) {
  return search(tracks, 'track');
};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists(playlists) {
  return search(playlists, 'playlist');
};