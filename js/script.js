"use strict";

// const user = "Азалия";
// alert(`${user}, у тебя все получится!`);

let numberOfBooks;
start();
const personalMovieDB = {
  count: +numberOfBooks,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (numberOfBooks != 0) {
  // detectPersonalLevel();
  // rememberMyBooks();
  writeYourGenres();
  showMyDB(personalMovieDB.privat);
} else {
  alert("Жаль, что вы не любите читать");
  console.log("Книги - это Мир!");
}

function start() {
  numberOfBooks = prompt("Сколько книг ты прочитал?", "");
  while (numberOfBooks == "" || isNaN(numberOfBooks) || numberOfBooks == null) {
    numberOfBooks = prompt("Сколько книг ты прочитал?", "");
  }
}

function rememberMyBooks() {
  let i = 0;
  while (i < 2) {
    let a = prompt("Как называется прочитанная книга?", "");
    if (a != null && a != "") {
      if (a.length > 9) {
        //   a = a.slice(1, 10);
        a = a.substring(1, 10); // 10 - index
        a = a.substr(1, 10); // 10 - long
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
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Маловато читаешь, дружище!(((");
  } else if (personalMovieDB.count < 30) {
    console.log("Ты классический читатель.");
  } else if (personalMovieDB.count > 30) {
    console.log("Ты книголюб!)))");
  }
}

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenresAza() {
  let genrNum = 0;
  let genre;
  while (genrNum < 3) {
    genre = prompt(`Ваш любимый жанр под номером ${genrNum + 1} ?`);
    if (genre == "" || genre == null) {
      continue;
    } else {
      personalMovieDB.genres[genrNum] = genre;
      genrNum++;
    }
  }
}

function writeYourGenres() {
  // нет проверки введенных данных
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i} ?`
    );
  }
}
