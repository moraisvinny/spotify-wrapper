import { API_URL, HEADERS } from './config';
import { toJSON } from './util'

export const getAlbum = id => {
  return fetch(`${API_URL}/albums/${id}`, HEADERS)
    .then(toJSON);
};
export const getAlbumTracks = id => {
  return fetch(`${API_URL}/albums/${id}/tracks`, HEADERS)
    .then(toJSON);
};

export const getAlbums = (ids) => {
  
  return fetch(`${API_URL}/albums?ids=${ids.join('%2C')}`, HEADERS)
    .then(toJSON);
};
