// web component

class ItemCart extends HTMLElement {
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
    this.positionInCart = '';
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
      'positionInCart',
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
    <div class="container">
      <div class="drink-img">
        <img class="" src="${this.menu_img}">
      </div>
      <div class="drink-info">
        <p class="name">${this.name}</p>
        <p class="price">&#36 ${this.price}</p>
        <div class="nutrition">
          <img class="" src="./media/nutritional.svg">
          <p class="calorie">${this.calorie} cal</p>
        </div>
      </div>
    </div>
    <div class="item-tools">
        <button class="item-tools__btn" onclick="editItem(${this.price})">Edit</button>
        <button class="item-tools__btn" onclick="deleteItem(${this.positionInCart})">Delete</button>
      </div>
    `;
  }
}

// register component
customElements.define('item-cart', ItemCart);

export default function itemCart(item) {
  return `
    <item-cart name="${item.name}" price="${item.price}" menu_img="${item.menu_img}" calorie="${item.calorie}" positionInCart="${item.positionInCart}"></item-cart>
    `;
}
