import "../js/milk-tea.js";

export default function drinkList(item) {
    return `
    <<milk-tea name="${item.name}" price="3${item.price}" menu_img="${item.menu_img}" calorie="${item.calorie}"></milk-tea>
    `;
}
