// import itemList from "../templates/item-list.js";
// import customizeItem from "../templates/customize-item.js";

import { mapTemplate } from "./template-mapper.js";

// https://stackoverflow.com/questions/969743/how-do-i-call-a-dynamically-named-method-in-javascript
var dyn_functions = [];

const xhr = new XMLHttpRequest();
let output = "";

export function buildModule(moduleName, url) {
  console.log("Building '" + moduleName + "' module...");

  /// Load data with XMLHttpRequest
  xhr.addEventListener("load", function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(this.response);
      const Items = JSON.parse(xhr.response);

      // This just sets the entire response into localStorage
      localStorage.setItem("Item Objects", JSON.stringify(Items));

      for (let item of Items) {
        output += mapTemplate(moduleName, item);
      }
      addElement(output);
    }

    function addElement(data_input) {
      // create a new div element, append it to main
      const newDiv = document.createElement("div");
      newDiv.id = "display";
      newDiv.insertAdjacentHTML("afterbegin", data_input);

      let targetElement = document.getElementsByTagName(moduleName)[0];

      targetElement.appendChild(newDiv);
    }
  });

  xhr.open("GET", url, true);
  xhr.send();
}
