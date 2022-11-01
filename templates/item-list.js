<<<<<<< Updated upstream
export default function drinkList(items) {
  return `
    <div class="item">
        <img src="${items.thumbnail}" alt="" class="item__img" />
        <div class="item__inner">
            <h4 class="item__name">${items.name}</h4>
            <p class="item__price">$${items.price}</p>
        </div>
    </div>`;
=======
import "../js/milk-tea.js";

export default function drinkList(items) {
    return `
    <milk-tea name="${items.name}" price="3${items.price}" menu_img="${items.menu_img}" calorie="${items.calorie}"></milk-tea>
`;
>>>>>>> Stashed changes
}
