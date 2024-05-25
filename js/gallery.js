const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

/* 
preview — посилання на маленьку версію зображення
original — посилання на велику версію зображення 
description — текстовий опис, для  alt  



*/

const gallery = document.querySelector('.gallery');

const galleryItemsContent = images
  .map(
    image => `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="large-image.jpg"
      alt="${image.description}"
    />
  </a>
</li>`
  )
  .join('');
// gallery.innerHTML = galleryItemsContent;
gallery.insertAdjacentHTML('afterbegin', galleryItemsContent);
const imageLinks = document.querySelectorAll('.gallery-link');
// console.log(imageLinks);
const galleryItems = document.querySelectorAll('.gallery-item');
// console.log(galleryItem);
imageLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    // console.log(event.target); //img
    // console.log(event.currentTarget); // a
    // console.log(event.currentTarget.nodeName); //A
  });
});
gallery.addEventListener('click', handelClickGallery);
function handelClickGallery(event) {
  if (event.target.nodeName === 'IMG') {
    // const imageLink = event.target.closest('.gallery-link').href;
    const imageLink = event.target.parentNode.href;
    const imageDescription = event.target.alt;
    // console.log(imageLinkUrl); // url
    // console.log(imageDescription); // alt
    basicLightbox
      .create(
        `<img src="${imageLink}" alt=${imageDescription} width="1400" height="900" >`
      )
      .show();
  } else return;
}

// ================= Не вдається зупинити завантаження якщо лістнер на загальному ел-ті ul
// gallery.addEventListener('click', handelClickGallery);
// function handelClickGallery(event) {
//   // if (event.target.nodeName === 'A') {
//   //   event.preventDefault();
//   console.log('gallery click');
//   console.log(event.target); // ul або img (depends on click)
//   console.log(event.currentTarget); // ul (parent)
//   console.log(event.currentTarget.nodeName); // UL
// }

// function stopDownloadOnclick() {

// }

// =================
