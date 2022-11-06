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

  addToCartCookie("Cart", item);
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

localStorage.clear();

const addToCartCookie = (key, cartItem) => {
  //   localStorage.clear();
  let data = localStorage.getItem(key);

  if (data != null) {
    console.log("Cart exists!");
    data = JSON.parse(data);
  } else {
    console.log("Cart is empty :(");
    data = [];
  }

  cartItem.positionInCart = data.length;
  console.log(cartItem);
  data.push(cartItem);

  // stringify array and add to storage
  localStorage.setItem(key, JSON.stringify(data));
  console.log(localStorage.getItem(key));
};
