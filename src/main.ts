import './main.css';

import Alpine from 'alpinejs';

function getImageUrl(name: string, fileExtension: string = 'jpg') {
  return new URL(`./img/${name}.${fileExtension}`, import.meta.url).href
}

document.addEventListener('alpine:initialized', () => {
  const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('[data-product-image]');
  const urls = [
    getImageUrl('product-4'),
    getImageUrl('product-1'),
    getImageUrl('product-2'),
    getImageUrl('product-3'),
    getImageUrl('product-4'),
    getImageUrl('product-1'),
  ];
  images.forEach((image, i) => { image.src = urls[i]; });
});

Alpine.start();
