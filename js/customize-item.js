export const addToCartCookie = (cartItem) => {
  const cart = window.localStorage.getItem("cart");

  if (cart === null) {
    window.localStorage.setItem("cart", JSON.stringify([cartItem]));
  } else {
    const getCurrentCart = window.localStorage.getItem("cart");
    const currentCart = JSON.parse(getCurrentCart);

    currentCart.push(cartItem);

    window.localStorage.setItem("cart", JSON.stringify(currentCart));
  }
};

import { buildModule } from "../builder/module-builder.js";
import { loadJSON } from "../utilities/load-json.js";

// Parse url for a product ID
let params = new URL(document.location).searchParams;
let productId;
productId = params.get("productId");
console.log(productId);
var item = {};

const startBuild = () => {
  loadJSON("./data/items.json")
    .then((data) => {
      item = data[productId - 1];
      console.log(item);

      buildModule("item-full", item);
    })
    .catch((data) => {
      console.log(data);
    });
};

startBuild();

// create cart object
document.getElementById("add-to-cart").addEventListener("click", () => {
  document.getElementById("cart-msg--successful").innerHTML = "Item added!";
  item.jelly = getSelectedValue("jelly");
  item.tapiocaPearl = getSelectedValue("tapioca-pearl");
  item.sweetness = getSelectedValue("sweetness");
  item.ice = getSelectedValue("ice");

  // localStorage.clear();
  localStorage.setItem("Cart", JSON.stringify(item));
  console.log(item);

  // console.log(localStorage);
});

const getSelectedValue = (selectedValue) => {
  var ele = document.getElementsByName(selectedValue);
  let i;
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      let choice = ele[i].value;
      return choice;
    }
  }
};
