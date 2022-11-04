// web component

class MilkTea extends HTMLElement {
  constructor() {
    super();
    this.id = "";
    this.name = "";
    this.price = "";
    this.thumbnail = "";
    this.category = "";
    this.isPopular = "false";
    this.menu_img = "";
    this.calorie = "";
  }

  // component attributes
  static get observedAttributes() {
    return [
      "id",
      "name",
      "price",
      "thumbnail",
      "category",
      "isPopular",
      "menu_img",
      "calorie",
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
    <link href="../css/milk-tea.css" rel="stylesheet" />
    <div class="container" onclick="openURL(${this.id})">
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
    `;
  }
}

// register component
customElements.define("milk-tea", MilkTea);
