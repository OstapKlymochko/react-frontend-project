
const baseURL = 'https://api.themoviedb.org/3';
const postersURL = 'https://image.tmdb.org/t/p/original';

const discover = '/discover/movie';
const genres = '/genre/movie/list';
const trending = '/trending/movie/week'

const urls = {
    discover:{
        discover
    },
    trending:{
        trending
    },
    genres:{
        genres
    }
}

export {
    baseURL,
    postersURL,
    urls
}