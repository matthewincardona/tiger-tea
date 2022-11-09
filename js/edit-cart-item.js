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
      console.log(data);
      item = data;
      buildModule('item-full', data);
    })
    .catch((data) => {
      console.log(data);
    });
};

startBuild();

// set checked radio buttons
item.jelly = setSelectedValue('jelly', item.jelly);
item.tapiocaPearl = setSelectedValue('tapioca-pearl', item.tapiocaPearl);
item.sweetness = setSelectedValue('sweetness', item.sweetness);
item.ice = setSelectedValue('ice', item.ice);

function setSelectedValue(selectedValue, itemValue) {
  console.log(itemValue);
  var ele = document.getElementsByName(selectedValue);
  let i;
  for (i = 0; i < ele.length; i++) {
    if ((ele[i].value = itemValue)) {
      console.log('Found a match!');
      ele[i].checked = 'true';
      return choice;
    }
  }
}

// create cart object
document.getElementById('add-to-cart').addEventListener('click', () => {
  document.getElementById('cart-msg--successful').innerHTML = 'Item updated!';
  item.jelly = getSelectedValue('jelly');
  item.tapiocaPearl = getSelectedValue('tapioca-pearl');
  item.sweetness = getSelectedValue('sweetness');
  item.ice = getSelectedValue('ice');

  addToCartCookie(position, item);
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

const addToCartCookie = (key, cartItem) => {
  localStorage.removeItem(key);
  console.log(cartItem);
  localStorage.setItem(key, JSON.stringify(cartItem));
  console.log(localStorage.getItem(key));
};
