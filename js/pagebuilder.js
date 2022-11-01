// TO DO:
// - put json reader in a separate file

<<<<<<< Updated upstream
import drinkList from "../templates/item-list.js";
=======
// import drinkList from "../templates/item-list.js";
import "../js/milk-tea.js";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      output += drinkList(item);
=======
      // output += drinkList(item);
      output += `<milk-tea name="${item.name}" price="3${item.price}" menu_img="${item.menu_img}" calorie="${item.calorie}"></milk-tea>`;
>>>>>>> Stashed changes
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
