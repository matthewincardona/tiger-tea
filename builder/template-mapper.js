import itemFull from '../templates/item-full.js';
import itemSimple from '../templates/item-simple.js';
import itemCart from '../templates/item-cart.js';

// maps template name to a function
export function mapTemplate(moduleName, item) {
  switch (moduleName) {
    case 'item-full':
      return itemFull(item);
      break;
    case 'item-simple':
      return itemSimple(item);
      break;
    case 'item-cart':
      return itemCart(item);
      break;
  }
}
