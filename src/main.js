export const search = (query, type) => {

  return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(data => data.json());

};
export const searchArtists = (artists) => search(artists, 'artist')
export const searchAlbums = (albums) => search(albums, 'album')
export const searchTracks = (tracks) => search(tracks, 'track')
export const searchPlaylists = (playlists) => search(playlists, 'playlist')
