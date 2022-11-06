import itemFull from "../templates/item-full.js";
import itemCart from "../templates/item-cart.js";

// maps template name to a function
export function mapTemplate(moduleName, item) {
  switch (moduleName) {
    case "item-full":
      return itemFull(item);
      break;
    case "item-cart":
      return itemCart(item);
      break;
  }
}
