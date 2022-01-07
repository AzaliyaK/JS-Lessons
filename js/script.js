"use strict";

// const user = "Азалия";
// alert(`${user}, у тебя все получится!`);

const numberOfBooks = +prompt("Сколько книг ты прочитал?", "");
const personalMovieDB = {
  count: numberOfBooks,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Как называется 1 прочитанная книга?", ""),
  b = +prompt("На сколько (1...10) тебе понравилась?", ""),
  c = prompt("Как называется 2 прочитанная книга?", ""),
  d = +prompt("На сколько (1...10) тебе понравилась?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
