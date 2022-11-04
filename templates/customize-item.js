import "../js/milk-tea.js";

export default function customizeItem(item) {
  return `
    <milk-tea name="${item.name}" price="${item.price}" menu_img="${item.menu_img}" calorie="${item.calorie}"></milk-tea>
    `;
}
