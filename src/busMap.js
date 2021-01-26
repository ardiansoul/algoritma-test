function busMap(rowMap, rowTotal) {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let app = document.getElementById("app");
  let result = [];
  let m = 0;
  let col = [];
  let row = [];
  let l = 0;

  for (let k = 0; k < rowMap.length; k++) {
    for (let j = 0; j < rowTotal; j++) {
      for (let i = 0; i < rowMap[m]; i++) {
        col.push(number[l]);
        l++;
      }
      row[j] = col;
      col = [];
    }
    m++;
    result.push(row);
    row = [];
  }

  app.innerHTML = JSON.stringify(result);
}

let rowMap = [3, 2];
let rowTotal = 3;

busMap(rowMap, rowTotal);
