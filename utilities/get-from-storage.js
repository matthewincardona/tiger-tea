export async function getFromStorage(key) {
  return new Promise(function (resolve, reject) {
    // Load data from storage
    let res = localStorage.getItem(key);
    res = JSON.parse(res);
    // console.log("Retrieved from storage: " + res);
    resolve(res);
  });
}
