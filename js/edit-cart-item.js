import { buildModule } from '../builder/module-builder.js';
import { loadJSON } from '../utilities/load-json.js';
import { getFromStorage } from '../utilities/get-from-storage.js';

// Parse url for a product ID
let params = new URL(document.location).searchParams;
let position = params.get('productId');
console.log('position: ' + position);
var item = {};

const startBuild = () => {
  getFromStorage(position)
    .then((data) => {
      item = data[position];
      console.log(item);
      buildModule('item-full', item);
    })
    .catch((data) => {
      console.log(data);
    });
};

startBuild();

// set checked radio buttons
document.getElementById('cart-msg--successful').innerHTML = 'Item updated!';
item.jelly = setSelectedValue('jelly');
item.tapiocaPearl = setSelectedValue('tapioca-pearl');
item.sweetness = setSelectedValue('sweetness');
item.ice = setSelectedValue('ice');

const setSelectedValue = (selectedValue, itemValue) => {
  var ele = document.getElementsByName(selectedValue);
  let i;
  for (i = 0; i < ele.length; i++) {
    if ((ele[i].value = itemValue)) {
      ele[i].checked = 'true';
      return choice;
    }
  }
};

// create cart object
document.getElementById('add-to-cart').addEventListener('click', () => {
  document.getElementById('cart-msg--successful').innerHTML = 'Item added!';
  item.jelly = getSelectedValue('jelly');
  item.tapiocaPearl = getSelectedValue('tapioca-pearl');
  item.sweetness = getSelectedValue('sweetness');
  item.ice = getSelectedValue('ice');

  addToCartCookie(position, item);
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

const addToCartCookie = (key, cartItem) => {
  let key = uid();
  console.log(cartItem);
  cartItem.position = key;

  localStorage.setItem(key, JSON.stringify(cartItem));
  console.log(localStorage.getItem(key));
};
