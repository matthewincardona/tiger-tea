import { buildModule } from '../builder/module-builder.js';
import { getFromStorage } from '../utilities/get-from-storage.js';

// var item = {
//   name: "Strawberry Milk Tea",
//   price: 3.99,
//   calorie: 200,
//   menu_img: "./media/strawberry.png",
// };

const startBuild = () => {
  let data = allStorage();
  console.log(data);
  buildModule('item-cart', JSON.parse(data));
  getTotalPrice(data);
};

function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return values;
}

startBuild();

const getTotalPrice = (cartItems) => {
  let total = 0;

  for (var i = 0; i < cartItems.length; i++) {
    console.log(cartItems[i]);
    total += cartItems[i].price;
    total = Math.round(total * 100) / 100;
  }
  document.getElementById('total').innerHTML = '$ ' + total.toString();
};
