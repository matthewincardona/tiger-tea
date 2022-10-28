import itemList from "../templates/item-list.js";
import customizeItem from "../templates/customize-item.js";

// maps template name to
export function mapTemplate(fnstring, data) {
  switch (fnstring) {
    case "item-list":
      return itemList(data);
      break;
    case "customize-item":
      return customizeItem(data);
      break;
  }
}
