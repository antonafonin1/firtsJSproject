"use strict";

let numberOfFilms;

const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMoviesDB.count === '' || personalMoviesDB.count === null || isNaN(personalMoviesDB.count)) {
            personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    remeberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            // personalMoviesDB.movies[]
            const moviess = prompt('Один из последних просмотренных фильмов?', '');
            const rating = prompt('На сколько оценете его');
        
            if (moviess !== null && rating !== null && moviess !== '' && rating !== '' && moviess.length < 50) {
                personalMoviesDB.movies[moviess] = rating;
            } else { 
                i--;
            }
        } 
    },
    detectPersonalLevel: () => {
        if (10 <= personalMoviesDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMoviesDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: () => {
        if (personalMoviesDB.privat != true) {
            console.log(personalMoviesDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMoviesDB.privat) {
            personalMoviesDB.privat = false;
        } else {
            personalMoviesDB.privat = true;
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == '' || genre == null) {
                console.log('wrong');
                i--;
            } else {
                personalMoviesDB.genres[i - 1] = genre;
            }
        }

        personalMoviesDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
