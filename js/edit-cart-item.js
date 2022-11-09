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
      item = data;
      console.log(data);
      buildModule('item-full', data);
      // setValue(data);
    })
    .catch((data) => {
      console.log(data);
    });
};

startBuild();

// function setValue(data) {
//   // set checked radio buttons
//   item = data;
//   console.log(item);
//   setSelectedValue('jelly', item.jelly);
//   setSelectedValue('tapioca-pearl', item.tapiocaPearl);
//   setSelectedValue('sweetness', item.sweetness);
//   setSelectedValue('ice', item.ice);
// }

// function setSelectedValue(selectedValue, itemValue) {
//   console.log(itemValue);
//   var ele = document.getElementsByName(selectedValue);
//   let i;
//   for (i = 0; i < ele.length; i++) {
//     if ((ele[i].value = itemValue)) {
//       console.log(ele[i].value);
//       ele[i].checked = 'true';
//     }
//   }
// }

// create cart object
document.getElementById('add-to-cart').addEventListener('click', () => {
  item.jelly = getSelectedValue('jelly');
  item.tapiocaPearl = getSelectedValue('tapioca-pearl');
  item.sweetness = getSelectedValue('sweetness');
  item.ice = getSelectedValue('ice');
  item.ice = 'SADSADADDSADASD';
  console.log(item);
  addToCartCookie(position);
});

function getSelectedValue(selectedValue) {
  var ele = document.getElementsByName(selectedValue);
  let i;
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      let choice = ele[i].value;
      console.log(choice);
      return choice;
    }
  }
}

const addToCartCookie = (key) => {
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify(item));
  console.log(localStorage.getItem(key));
  console.log('Updated cart!');
  document.getElementById('cart-msg--successful').innerHTML = 'Item updated!';
};
