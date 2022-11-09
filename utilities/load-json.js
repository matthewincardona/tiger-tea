const xhr = new XMLHttpRequest();

export async function loadJSON(url) {
  return new Promise(function (resolve, reject) {
    /// Load data with XMLHttpRequest
    xhr.addEventListener('load', function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // console.log(this.response);
        let res = JSON.parse(xhr.response);

        // This just sets the entire response into localStorage
        localStorage.setItem('Item Objects', JSON.stringify(res));
        resolve(res);
      }
    });

    xhr.open('GET', url, true);
    xhr.send();
  });
}
