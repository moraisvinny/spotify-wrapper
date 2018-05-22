export const getAlbum = id => {
  return fetch(`https://api.spotify.com/v1/albums/${id}`)
    .then(data => data.json());
};
export const getAlbumTracks = () => {};

export const getAlbums = (ids) => {
  
  fetch(`https://api.spotify.com/v1/albums?ids=${ids.join('%2C')}`);
};
