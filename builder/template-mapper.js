// import itemList from "../templates/item-list.js";
import customizeItem from "../templates/customize-item.js";
import customizeBtns from "../templates/customize-btns.js";

// maps template name to a function
export function mapTemplate(moduleName, item) {
  switch (moduleName) {
    case "customize-item":
      return customizeItem(item);
      break;
    case "customize-btns":
      console.log("dsada");
      return customizeBtns();
      break;
  }
}
