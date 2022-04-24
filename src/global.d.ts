declare module 'alpinejs';
declare module '@alpinejs/focus';

interface Window {
  formatMoney: (amount: number, decimalPlaces?: number) => string;
}
