import axios from 'axios';

const serverApi = axios.create({
  baseURL: 'https://pixabay.com/api',
});
export function getImagesByQuery(query) {
  return serverApi
    .get('/', {
      params: {
        key: '55064967-1c5dabe6bc7cd06c1c4335f3a',
        image_type: 'photo',
        q: query,
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => res.data);
}
