"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt("Сколько книг ты прочитал?", "");
    while (
      personalMovieDB.count == "" ||
      isNaN(personalMovieDB.count) ||
      personalMovieDB.count == null
    ) {
      personalMovieDB.count = prompt("Сколько книг ты прочитал?", "");
    }
  },
  rememberMyBooks: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Маловато читаешь, дружище!(((");
    } else if (personalMovieDB.count < 30) {
      console.log("Ты классический читатель.");
    } else if (personalMovieDB.count > 30) {
      console.log("Ты книголюб!)))");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (!personalMovieDB.privat) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
  writeYourGenres: function () {
    let genres;
    // for (let i = 1; i < 4; i++) {
    // genre = prompt(`Ваш любимый жанр под номером ${i} ?`);
    // if (genre == "" || genre == null) {
    //   i--;
    // } else {
    //   personalMovieDB.genres[i - 1] = genre;
    // }
    for (let i = 1; i < 2; i++) {
      genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
      if (genres == "" || genres == null) {
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр №${i + 1} - это ${item}`);
    });
  },
};

// personalMovieDB.start();
// if (personalMovieDB.count != 0) {
//   // detectPersonalLevel();
//   // rememberMyBooks();
//   personalMovieDB.writeYourGenres();
//   personalMovieDB.showMyDB(personalMovieDB.privat);
// } else {
//   alert("Жаль, что вы не любите читать");
//   console.log("Книги - это Мир!");
// }
