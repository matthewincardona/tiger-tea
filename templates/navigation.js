// web component

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  // connect component
  connectedCallback() {
    this.innerHTML = `
    <link href="./css/navigation.css" rel="stylesheet" />
    <nav>
      <div class="nav-inner">
        <a href="./index.html">
          <img class="nav-image" src="./media/Home.svg" alt="" />
        </a>
        <a href="#">
          <img class="nav-image" src="./media/Favorites.svg" alt="" />
        </a>
        <a href="./cart.html">
          <img class="nav-image" src="./media/Cart.svg" alt="" />
        </a>
        <a href="#">
          <img class="nav-image" src="./media/Profile.svg" alt="" />
        </a>
      </div>
    </nav>
    `;
  }
}

// register component
customElements.define("nav-bar", NavBar);
