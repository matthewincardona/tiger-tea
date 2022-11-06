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
  addToCartCookie("Cart", JSON.stringify(item));
  console.log(localStorage);
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

// https://stackoverflow.com/questions/70565017/how-to-append-to-a-local-storage-instead-of-replacing-when-new-object-is-passed
export const addToCartCookie = (key, cartItem) => {
  const cart = getFromStorage(key);

  if (cart === null) {
    localStorage.setItem(key, JSON.stringify([cartItem]));
  } else {
    const getCurrentCart = localStorage.getItem(key);
    const currentCart = JSON.parse(getCurrentCart);

    currentCart.push(cartItem);

    localStorage.setItem(key, JSON.stringify(currentCart));
  }
};
