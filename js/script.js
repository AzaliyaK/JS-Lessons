"use strict";

// const user = "Азалия";
// alert(`${user}, у тебя все получится!`);

const numberOfBooks = prompt("Сколько книг ты прочитал?", "");
if (numberOfBooks != null && numberOfBooks != "") {
  const personalMovieDB = {
    count: +numberOfBooks,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };
  if (personalMovieDB.count < 10) {
    console.log("Маловато читаешь, дружище!(((");
  } else if (personalMovieDB.count < 30) {
    console.log("Ты классический читатель.");
  } else if (personalMovieDB.count > 30) {
    console.log("Ты книголюб!)))");
  }

  let i = 0;
  while (i < 2) {
    let a = prompt("Как называется прочитанная книга?", "");
    if (a != null && a != "") {
      if (a.length > 9) {
        a = a.slice(1, 10);
      }
    } else {
      continue;
    }

    const b = prompt("На сколько (1...10) тебе понравилась?", "");
    if (b != null && b != "") {
      personalMovieDB.movies[a] = b;
      i++;
    } else {
      continue;
    }
  }
  console.log(personalMovieDB);
} else {
  alert("Жаль, что вы не любите читать");
  console.log("Книги - это Мир!");
}
