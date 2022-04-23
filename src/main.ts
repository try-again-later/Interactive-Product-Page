import './main.css';

import Alpine from 'alpinejs';

function getImageUrl(name: string, fileExtension: string = 'jpg') {
  return new URL(`./img/${name}.${fileExtension}`, import.meta.url).href
}

document.addEventListener('alpine:initialized', () => {
  const images = document.querySelectorAll('[data-product-image]');
  (images[0] as HTMLImageElement).src = getImageUrl('product-4');
  (images[1] as HTMLImageElement).src = getImageUrl('product-1');
  (images[2] as HTMLImageElement).src = getImageUrl('product-2');
  (images[3] as HTMLImageElement).src = getImageUrl('product-3');
  (images[4] as HTMLImageElement).src = getImageUrl('product-4');
  (images[5] as HTMLImageElement).src = getImageUrl('product-1');
});

Alpine.start();
