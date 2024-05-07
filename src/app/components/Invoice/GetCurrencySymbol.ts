export default function getCurrencySymbol(currencyCode:string) {
    switch (currencyCode) {
      case 'INR':
        return '₹';
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      default:
        return '';
    }
  }