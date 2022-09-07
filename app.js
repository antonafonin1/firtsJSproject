const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

let moviess = '';
let rating = +'';

for (let i = 0; i < numberOfFilms; i++) {
    // personalMoviesDB.movies[]
    moviess = prompt('Один из последних просмотренных фильмов?', '');
    rating = +prompt('На сколько оценете его');
    personalMoviesDB.movies[moviess] = rating;
}

const actor = prompt('Как зовут вашего любимого актера?');

personalMoviesDB.actors['actorName'] = actor;

console.log(personalMoviesDB);