import { buildModule } from '../builder/module-builder.js';
import { loadJSON } from '../utilities/load-json.js';

const startBuild = () => {
  loadJSON('./data/items.json')
    .then((data) => {
      console.log(data);
      buildModule('item-simple', data);
    })
    .catch((data) => {
      console.log(data);
    });
};

startBuild();
