import './main.css';

import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';

window.formatMoney = (amount: number, decimalPlaces: number = 2) => {
  return (Math.round(amount * 100) / 100).toFixed(decimalPlaces);
}

Alpine.plugin(focus);
Alpine.start();
