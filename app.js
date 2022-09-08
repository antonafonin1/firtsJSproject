"use strick";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

if (10 <= personalMoviesDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMoviesDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

let moviess = '';
let rating = +'';

for (let i = 0; i < 2; i++) {
    // personalMoviesDB.movies[]
    moviess = prompt('Один из последних просмотренных фильмов?', '');
    rating = prompt('На сколько оценете его');

    if (moviess != null && rating != null && moviess != '' && rating != '' && moviess.length < 50) {
        personalMoviesDB.movies[moviess] = rating;
    } else { 
        i--;
    }
} 



const actor = prompt('Как зовут вашего любимого актера?');

personalMoviesDB.actors['actorName'] = actor;

console.log(personalMoviesDB);