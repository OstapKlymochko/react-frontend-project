import React from 'react';

import {MovieCard} from "../MovieCard/MovieCard";

const MoviesList = ({movies}) => {
    return (
        <>
            {!!movies.length && movies.map(film => <MovieCard key={film.id} film={film}/>)}
        </>
    );
};

export {MoviesList};