import { mapTemplate } from "./template-mapper.js";

let output = "";

export function buildModule(moduleName, Items) {
  console.log("Building '" + moduleName + "' module...");

  // if the incoming data is an array, loop over it
  if (Array.isArray(Items)) {
    // Map data to a specific module
    for (let item of Items) {
      output += mapTemplate(moduleName, item);
    }
    addElement(output);
  } else {
    output += mapTemplate(moduleName, Items);
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
}
