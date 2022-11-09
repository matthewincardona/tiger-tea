import { buildModule } from '../builder/module-builder.js';
import { loadJSON } from '../utilities/load-json.js';

// Parse url for a product ID
let params = new URL(document.location).searchParams;
let productId;
productId = params.get('productId');
console.log(productId);
var item = {};

const startBuild = () => {
  loadJSON('./data/items.json')
    .then((data) => {
      item = data[productId - 1];
      console.log(item);
      buildModule('item-full', item);
    })
    .catch((data) => {
      console.log(data);
    });
};

startBuild();

// create cart object
document.getElementById('add-to-cart').addEventListener('click', () => {
  item.jelly = getSelectedValue('jelly');
  item.tapiocaPearl = getSelectedValue('tapioca-pearl');
  item.sweetness = getSelectedValue('sweetness');
  item.ice = getSelectedValue('ice');

  // check for empty choices
  if (
    (item.jelly && item.tapiocaPearl && item.sweetness && item.ice) != undefined
  ) {
    document.getElementById('cart-msg--successful').innerHTML = 'Item added!';
    addToCartCookie(item);
  } else {
    alert("HEY!! You didn't select all of the options!");
  }
});

function getSelectedValue(selectedValue) {
  var ele = document.getElementsByName(selectedValue);
  let i;
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      let choice = ele[i].value;
      return choice;
    }
  }
}

// localStorage.clear();

const addToCartCookie = (cartItem) => {
  let key = uid();
  console.log(cartItem);
  cartItem.position = key;

  localStorage.setItem(key, JSON.stringify(cartItem));
  console.log(localStorage.getItem(key));
};

const uid = () => {
  return Date.now();
};
