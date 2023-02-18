import React from 'react';

import css from './Movies.module.css';
import {Link} from "react-router-dom";
import {StarsRating} from "../StarsRating/StarsRating";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {GenreBadge} from "../GenreBadge/GenreBadge";
// import {}
const MovieCard = ({film}) => {
    // {
    //     "adult": false,
    //     "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    //     "genre_ids": [
    //     28,
    //     12,
    //     878
    // ],
    //     "id": 505642,
    //     "original_language": "en",
    //     "original_title": "Black Panther: Wakanda Forever",
    //     "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    //     "popularity": 4892.509,
    //     "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    //     "release_date": "2022-11-09",
    //     "title": "Black Panther: Wakanda Forever",
    //     "video": false,
    //     "vote_average": 7.5,
    //     "vote_count": 3161
    // }
    const {id, original_title, vote_average, vote_count, poster_path, release_date, genre_ids} = film;

    return (
        <div className={css.card}>
            <StarsRating rate={vote_average}/>
            <p>{vote_count} votes</p>
            <PosterPreview path={poster_path}/>
            <Link to={{pathname: `/movies/${id}`}}>{original_title}</Link>
            <GenreBadge ids={genre_ids}/>
        </div>
    );
};

export {MovieCard};