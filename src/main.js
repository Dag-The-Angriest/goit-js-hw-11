import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', e => {
  e.preventDefault();
  showLoader();
  clearGallery();
  const formData = new FormData(e.target);
  const obj = {
    name: formData.get('search-text'),
  };
  if (obj.name == '') {
    hideLoader();
    return;
  }
  const arr = getImagesByQuery(obj.name)
    .then(res => {
      const arr = res.hits;
      // console.log(arr);
      if (arr.length == 0) {
        console.log('yes');
        hideLoader();
        //   clearGallery();
        return iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        });
      }
      hideLoader();
      return createGallery(arr);
    })
    .catch(res => {
      hideLoader();
      return iziToast.show({
        message: 'There was an error!',
        position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
      });
    });
  //   console.log(arr);
});

// const gallery1 = document.querySelector('.gallery');

// document.addEventListener('DOMContentLoaded', () => {
//   getImagesByQuery('cat').then(res => {
//     const arr = res.hits;
//     // console.log(arr);

//     const markup = imagesTemplate(arr);

//     gallery1.innerHTML = markup;
//   });
// });

// function imageTemplate(image) {
//   return `<li class="gallery-item">
// 	<a class="gallery-link" href="${image.largeImageURL}">
// 		<img
// 		  class="gallery-image"
// 		  src="${image.previewURL}"
// 		  alt=""
// 		/>
// 	</a>
// </li>`;
// }

// function imagesTemplate(arr) {
//   return arr.map(imageTemplate).join('');
// }
