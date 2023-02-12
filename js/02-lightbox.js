import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
// galleryContainer.addEventListener('click', onGalleryModalClick); !!!

function createGalleryImgMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class='gallery__item'><a class='gallery__link' href="${original}">
      <img class="gallery__image" 
      src="${preview}" alt="${description}" width="340"></a></div>`;
    })
    .join('');
}

// function onGalleryModalClick(e) {
//   e.preventDefault();

//   if (!e.target.classList.contains('gallery__image')) {
//     return;
//   }
// } !!!

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 300,
});
