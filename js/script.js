"use strict";


// const user = 'Azaliya';
// alert(`${user}, I'm glad to see you!`);


const result = confirm("How are you?");
console.log(result);

// alert('Как дела?');

const answers = [];
answers[0] = prompt('Как твое имя?', '');
answers[1] = prompt('Сколько тебе лет?', '21');
answers[2] = prompt('Ты студент?', 'да');
if (answers[2] == 'да') {
    answers[3] = prompt('В каком городе ты учишься?', '');
    answers[4] = prompt('Какой институт?', '');
    answers[5] = prompt('Какой курс?', '1');
}
console.log(answers);
document.write(answers);

const answer = prompt("Вам есть 18?", "21");
console.log(typeof (answer));
console.log(answer);

// let number = 5;
// const leftBorderWidth = 1;
// number = 14.4;
// console.log(number);


// // console.log(someth);

// // let und;
// // console.log(und);

// const obj = {
//     name: "Роберт",
//     age: 20,
//     student: true
// };
// obj.age = 22;
// console.log(obj);
// console.log(obj["name"]);