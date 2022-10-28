export default function drinkList(items) {
  return `
    <div class="item">
    <h1>Customize Item</h1>
        <img src="${items.thumbnail}" alt="" class="item__img" />
        <div class="item__inner">
            <h4 class="item__name">${items.name}</h4>
            <p class="item__price">$${items.price}</p>
        </div>
    </div>`;
}
