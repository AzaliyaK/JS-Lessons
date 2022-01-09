"use strict";
//  поверхностная копия объекта
function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

let numbers = {
  a: 2,
  b: 3,
  c: {
    x: 4,
    y: 5,
  },
};

newNum = copy(numbers);
newNum.a = 10;
newNum.c.d = 10;
console.log(newNum);
console.log(numbers);
// Result:
// { a: 10, b: 3, c: { x: 4, y: 5, d: 10 } }
// { a: 2, b: 3, c: { x: 4, y: 5, d: 10 } }

const add = {
  d: 17,
  e: 18,
};

console.log(Object.assign(numbers, add));
// Result:
// { a: 2, b: 3, c: { x: 4, y: 5, d: 10 }, d: 17, e: 18 }
const add1 = Object.assign({}, add);
add1.d = 16;
console.log(add1);
console.log(numbers);
// { d: 16, e: 18 }
// { a: 2, b: 3, c: { x: 4, y: 5, d: 10 }, d: 17, e: 18 }

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();
newArray[1] = "zzz";
console.log(oldArray);
console.log(newArray);
// Res
// [ 'a', 'b', 'c' ]
// [ 'a', 'zzz', 'c' ]

// spred - разворот для массивов и объектов
const a = ["a1", "a2", "a3"],
  b = ["b1", "b2", "b3"],
  c = [...a, ...b, "c1", "c2"];
console.log(c);
//  результат
// [
//   'a1', 'a2', 'a3',
//   'b1', 'b2', 'b3',
//   'c1', 'c2'
// ]

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 3, 7];
log(...num);
// 2
// 3
// 7

// создание копии массива
const array = ["fg", "ff"];
const newArray = [...array];
console.log(newArray);
//res: [ 'fg', 'ff' ]

// Создание копии объекта
const q = {
  one: 1,
  two: 2,
};
const newQ = { ...q };
console.log(newQ);
// Result
// { one: 1, two: 2 }
