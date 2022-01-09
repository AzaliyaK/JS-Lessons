"use strict";

let str = "some";
let strObj = new String(str);
console.log(typeof str);
console.log(typeof strObj);
//  Result
// string
// object

const soldier = {
  health: 400,
  armor: 200,
  sayHello: function () {
    console.log("Hello");
  },
};

// const jonh = {
//   health: 100,
// };

// // jonh.__proto__ = soldier; // устаревший метод
// Object.setPrototypeOf(jonh, soldier);
// jonh.sayHello();
// console.log(jonh);
// console.log(jonh.armor);

// Res
// Hello
// { health: 100 }
// 200


const jonh = Object.create(soldier);
jonh.sayHello();
// Res
// Hello
