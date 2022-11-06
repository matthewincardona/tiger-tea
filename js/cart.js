import { buildModule } from "../builder/module-builder.js";
import { getFromStorage } from "../utilities/get-from-storage.js";

// var item = {
//   name: "Strawberry Milk Tea",
//   price: 3.99,
//   calorie: 200,
//   menu_img: "./media/strawberry.png",
// };

const startBuild = () => {
  getFromStorage("Cart")
    .then((data) => {
      console.log(data);
      buildModule("item-full", data);
    })
    .catch((data) => {
      console.log(data);
    });
};

startBuild();
