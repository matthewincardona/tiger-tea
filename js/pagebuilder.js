// TO DO:
// - put json reader in a separate file

import drinkList from "../templates/item-list.js";

const xhr = new XMLHttpRequest();
const url = "../data/items.json";
let output = "";

/// Load data with XMLHttpRequest
xhr.addEventListener("load", function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(this.response);
    const Items = JSON.parse(xhr.response);

    // This just sets the entire response into localStorage
    localStorage.setItem("Item Objects", JSON.stringify(Items));

    for (let item of Items) {
      output += drinkList(item);
    }
    addElement(output);
  }

  function addElement(data_input) {
    // create a new div element, append it to main
    const newDiv = document.createElement("div");
    newDiv.id = "display";
    newDiv.insertAdjacentHTML("afterbegin", data_input);

    const currentDiv = document.getElementById("item-list");
    currentDiv.appendChild(newDiv);
  }
});

xhr.open("GET", url, true);
xhr.send();
