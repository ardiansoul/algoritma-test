function randomSum(arr, n) {
  let result = [];

  // let app = document.getElementById("app");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let number = arr[i] + arr[j];
      if (number === n) {
        result.push([arr[i], arr[j]]);
      }
      return;
    }
  }
  console.log(result);
  // app.innerHTML = JSON.stringify(result);
}

let arr = [1, 5, 6, 1, 0, 1];
let n = 6;

randomSum(arr, n);
