"use strict";

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   color: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function () {
//     console.log("Func in Obj");
//   },
// };
// options.makeTest();
// // деструктуризация
// const { border, bg } = options.color;
// console.log(border);
// console.log(bg);

// // console.log(Object.keys(options));
// // console.log(Object.keys(options).length);
// // console.log(options.name);

// // delete options.name;

// // console.log(options);

// // for (let key in options) {
// //   if (typeof options[key] === "object") {
// //     for (let i in options[key]) {
// //       console.log(`свойство ${i} = ${options[key][i]}`);
// //     }
// //   } else {
// //     console.log(`свойство ${key} = ${options[key]}`);
// //   }
// // }

// // массивы
// const arr = [2, 4, 8, 16, 32];
// arr.pop();
// arr.push(64);
// console.log(arr);

// // console.log('in перебирает индексы');
// // for (let val in arr) {
// //   console.log(val);
// // }
// // 0,1,2,3,4

// // console.log('of перебирает элементы');
// // for (let val of arr) {
// //   console.log(val);
// // }S
// // 2,4,8,16,32

// const arr1 = [2, 4, 8, 16, 32];
// // перебор элементов
// arr1.forEach(function (val, idx, arr1) {
//   console.log(`${idx}: ${val} in array ${arr1}`);
// });

// // модификация и возврат нового массива
// // map, every/some, filter, redice

// splitaaaa, sssss,
const str = prompt("", "");
const products = str.split(", ");
console.log(products);
products.sort(); // sort сортирует как строки
products.sort(compareNum); // sort сортирует как строки
console.log(products.join(" - "));

function compareNum(a, b) {
  return a - b;
}
