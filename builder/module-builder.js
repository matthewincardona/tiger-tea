import { mapTemplate } from './template-mapper.js';

let output = '';

export function buildModule(moduleName, Items) {
  console.log("Building '" + moduleName + "' module...");

  // 404 redirect
  if (Items === undefined || Items === null) {
    window.open('./404.html', '_self');
    console.log('404 ERROR PAGE DOES NOT EXIST');
    return;
  }

  // if the incoming data is an array, loop over it
  if (Array.isArray(Items)) {
    // Map data to a specific module
    for (let item of Items) {
      output += mapTemplate(moduleName, item);
      console.log(item.position);
    }
    addElement(output);
  } else {
    output += mapTemplate(moduleName, Items);
    addElement(output);
  }

  function addElement(data_input) {
    // create a new div element, append it to main
    const newDiv = document.createElement('div');
    newDiv.id = 'display';
    newDiv.insertAdjacentHTML('afterbegin', data_input);

    let targetElement = document.getElementsByTagName(moduleName)[0];

    targetElement.appendChild(newDiv);
  }
}
