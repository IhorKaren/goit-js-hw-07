import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryModalClick);

function createGalleryImgMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class='gallery__item'><a class='gallery__link' href="${original}">
      <img class="gallery__image" 
      src="${preview}" data-source="${original}" alt="${description}" width="340"></a></div>`;
    })
    .join('');
}

function onGalleryModalClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  onLightBoxModal(e);
}

function onLightBoxModal(e) {
  const instance = basicLightbox.create(
    `
		<img src="${e.target.dataset.source}" width="1280" height="auto"/>
        `,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    },
  );
  instance.show();

  function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;
    if (isEscKey) {
      instance.close();
    }
  }
}
