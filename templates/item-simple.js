// web component

class ItemSimple extends HTMLElement {
  constructor() {
    super();
    this.id = '';
    this.name = '';
    this.price = '';
    this.thumbnail = '';
    this.category = '';
    this.isPopular = 'false';
    this.menu_img = '';
    this.calorie = '';
  }

  // component attributes
  static get observedAttributes() {
    return [
      'id',
      'name',
      'price',
      'thumbnail',
      'category',
      'isPopular',
      'menu_img',
      'calorie',
    ];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  // connect component
  connectedCallback() {
    this.innerHTML = `
    <link href="./css/item.css" rel="stylesheet" />
    <div class="card-drinks" onclick="openURL(${this.id})">
    <div class="spot" ${this.id}">
      <p class="spot-name">${item.name}</p>
      <img src="${item.thumbnail}" alt="${item.name}" class="spot-photo" />
    </div>
  </div>
    `;
  }
}

// register component
customElements.define('item-simple', ItemSimple);

export default function itemSimple(item) {
  return `
    <item-simple name="${item.name}" price="${item.price}" menu_img="${item.menu_img}" calorie="${item.calorie}"></item-simple>
    `;
}
