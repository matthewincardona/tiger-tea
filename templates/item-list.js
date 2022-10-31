export default function itemList(item) {
  return `
    <div class="item"  onclick="openURL(${item.id})" data-mod-id="${item.id}">
        <img src="${item.thumbnail}" alt="" class="item__img" />
        <div class="item__inner">
            <h4 class="item__name">${item.name}</h4>
            <p class="item__price">$${item.price}</p>
        </div>
    </div>`;
}
