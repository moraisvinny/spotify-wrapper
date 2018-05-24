import { API_URL } from './config';
import { toJSON } from './util'

export const getAlbum = id => {
  return fetch(`${API_URL}/albums/${id}`)
    .then(toJSON);
};
export const getAlbumTracks = id => {
  return fetch(`${API_URL}/albums/${id}/tracks`)
    .then(toJSON);
};

export const getAlbums = (ids) => {
  
  return fetch(`${API_URL}/albums?ids=${ids.join('%2C')}`)
    .then(toJSON);
};
