"use strict";

function hello() {
  console.log("Helloy, World");
  debugger; //  для отладки
}

hello();

function hi() {
  console.log("Say hi!");
}

hi();

const arr = [1, 14, 4, 30, 54],
  sorted = arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}

console.log(sorted);

//  to string
console.log(typeof String(12345));
// >> string
const num = 5;
console.log("https://vc.com/catalogue/" + num);
// >> https://vc.com/catalogue/5

const fontSize = 12 + "px";
console.log(typeof fontSize);
// >> string

// to number
console.log(typeof Number("144"));
//>> number
console.log(typeof +"144");
//>> number
console.log(typeof parseInt("14px", 10));
//>> number

// *--------- to boolean ------------*
//  false:  null, <=0, '', undefined, NaN
//  true: ...

console.log(typeof Boolean("4"));
//>>  boolean
console.log(typeof !!"4");
//>>  boolean

//  Задачки
console.log (typeof([]+1+2));
// >> string '12'

// •	Какое будет выведено значение?: 
let x = 5; alert( x++ ); 
// >>5

// •	Чему равно такое выражение?:
//  - это попытка выполнить математ. действия 
//  над строками => NaN
console.log([ ] + false - null + true); 
// >> NaN
console.log(typeof([ ] + false)); 
//  >>string

// •	Что выведет этот код?: 
// операция выполняется справа-налево
// 
let y = 1; let x = y = 2; alert(x); 
// >> 2

// •	Чему равна сумма?
[ ] + 1 + 2
// >>"12"

// •	Что выведет этот код:?
alert( "1"[0] )
// >>"1"

// •	Чему равно ?
// null заразный
// И всегда запинается на лжи
// ИЛИ - на правде 
console.log( 2 && 1 && null && 0 && undefined );
//  после null выражение не выполняется =>
// console.log( 2 && 1 && null );
// >> null

// •	Есть ли разница между выражениями?
// !!( a && b ) и (a && b)
//  подставим вместо a и b конкретные значения
console.log( !!( 1 && 2 ) == (1 && 2));
//  false
console.log( !!( "1" && "2" ) == ("1" && "2"));
//  false
const a="aa",
b="bb";
console.log( !!( a && b ) );
// >>true
console.log( ( a && b ) );
// "bb"
const a=12,
b=10;
console.log( !!( a && b ) );
// >>true
console.log( ( a && b ) );
// "10"
(a && b)
// >>

// •	Что выведет этот код?: 
// высший приоритет у &&, возвращает последнее правдивое значение
// || возвращает первое правдивое значение
//3ш                  3 
//2ш        3
//1ш             3  
alert( null || 2 && 3 || 4 ); 

// >>

// •	Правда ли что a == b ?
//  два хранилища данных с похожей информацией, но они не одинаковы
// два ящика с яблоками
a = [1, 2, 3]; b = [1, 2, 3];
console.log(a==b);
console.log( [1, 2, 3] == [1, 2, 3]);
// >>false

// •	Что выведет этот код?:
//  + - преобразование в число
alert( +"Infinity" ); 
// >>Infinity (+ бесконечность)
alert( +"-Infinity" ); 
// >>-Infinity (- бесконечность)


// •	Верно ли сравнение: 
//  по кодировке у  код(Ё) меньше кода(я)
"Ёжик" > "яблоко"?
// >> fasle 

// •	Чему равно ?
0 || "" || 2 || undefined || true || falsе ;

console.log ( 0 || "" || 2 || undefined || true || falsе); 
// >> 2