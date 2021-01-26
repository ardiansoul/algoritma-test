function searchNot(arr) {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let app = document.getElementById("app");

  let result = array.filter((item) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) return;
    }
    return item;
  });
  app.innerHTML = JSON.stringify(result);
}

let arr = [1, 2, 3, 6, 7, 8, 9, 10];

searchNot(arr);
