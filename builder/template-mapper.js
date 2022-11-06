import itemFull from "../templates/item-full.js";

// maps template name to a function
export function mapTemplate(moduleName, item) {
  switch (moduleName) {
    case "item-full":
      return itemFull(item);
      break;
  }
}
