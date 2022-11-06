export async function getFromStorage(key) {
  return new Promise(function (resolve, reject) {
    // Load data from storage
    let res = localStorage.getItem(key);
    console.log("Retrieved from storage: " + res);
    resolve(res);
  });
}
