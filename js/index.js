const xhr = new XMLHttpRequest();
const url = './data/items.json';
let output = '';

/// Load data with XMLHttpRequest
xhr.addEventListener('load', function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(this.response);
    const Spots = JSON.parse(xhr.response);
    console.log(Spots);

    // This just sets the entire response into localStorage
    // localStorage.setItem('Spot Objects', JSON.stringify(Spots));

    for (let spot of Spots) {
      output += surfTemplate(spot);
    }
    addElement(output);
  }
  function addElement(data_input) {
    // create a new div element, append it to main
    const newDiv = document.createElement('div');
    newDiv.id = 'display';
    newDiv.insertAdjacentHTML('afterbegin', data_input);

    const currentDiv = document.getElementById('card_list');
    currentDiv.appendChild(newDiv);
  }
});

xhr.open('GET', url, true);
xhr.send();

function surfTemplate(spots) {
  return `
  <div class="card-drinks" onclick="openURL(${spots.id})">
    <div class = "spot" ${spots.id}">
      <p class = "spot-name">${spots.name}</p>
      <img src="${spots.thumbnail}" alt="${spots.name}" class="spot-photo" />
    </div>
  </div>`;
}
