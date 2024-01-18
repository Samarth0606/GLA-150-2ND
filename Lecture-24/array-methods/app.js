// let arr = [10, 20, 30, 40, 50];

// arr.forEach(function (item, index) {
//   console.log(`index: ${index} -- item: ${item}`);
// });

// ---------------------

// let arr = [10, 20, 30, 40, 50];

// let newArr = arr.map(function (item, index) {
//   return item * 2;
// });

// console.log(arr);
// console.log(newArr);

// ------------------

let arr = [10, 20, 30, 40, 50];

let newArr = arr.filter(function (item, index) {
  if (item >= 50) {
    return true;
  }
});

console.log(arr);
console.log(newArr);
