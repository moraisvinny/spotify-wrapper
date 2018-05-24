import { API_URL } from './config'
import { toJSON } from './util'
export const search = (query, type) => {

  return fetch(`${API_URL}/search?q=${query}&type=${type}`)
    .then(toJSON);

};
export const searchArtists = (artists) => search(artists, 'artist')
export const searchAlbums = (albums) => search(albums, 'album')
export const searchTracks = (tracks) => search(tracks, 'track')
export const searchPlaylists = (playlists) => search(playlists, 'playlist')
