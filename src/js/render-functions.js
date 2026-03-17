import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

const gallery1 = document.querySelector('.gallery');

document.addEventListener('DOMContentLoaded', () => {});

export function createGallery(images) {
  const elems = images
    .map(image => {
      const markup = `<li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
              <img
                class="gallery-image"
                src="${image.previewURL}"
                alt="${image.tags}"
              /> 
          </a>
          <div class="flex">
                <div>
                    <p class="bold">Likes</p>
                    <p >${image.likes}</p>
                </div>
                <div>
                    <p class="bold">Views</p>
                    <p >${image.views}</p>
                </div>
                <div>
                    <p class="bold">Comments</p>
                    <p >${image.comments}</p>
                </div>
                <div>
                    <p class="bold">Downloads</p>
                    <p >${image.downloads}</p>
                </div>
              </div>
      </li>`;
      return markup;
    })
    .join('');
  //   gallery1.refresh();
  gallery1.innerHTML = elems;
  let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
  gallery.refresh();
  return;
}
export function clearGallery() {
  gallery1.destroy();
}
export function showLoader() {
  gallery1.classList.add('loader');
}
export function hideLoader() {
  gallery1.classList.remove('loader');
}

// document.addEventListener('DOMContentLoaded', () => {
//   getImagesByQuery('cat').then(res => {
//     const arr = res.hits;
//     // console.log(arr);

//     const markup = imagesTemplate(arr);
//   });
// });

// function imageTemplate(image) {}

// function imagesTemplate(arr) {
//   return;
// }
