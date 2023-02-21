import React from 'react';

import {MovieCard} from "../MovieCard/MovieCard";

const MoviesList = ({movies}) => {
    return (
        <>
            {!!movies.length &&
                <div style={{display: 'flex', justifyContent: 'center', alignItems:'baseline',
                    flexWrap: 'wrap'}}>{movies.map(film =><MovieCard key={film.id} film={film}/>)}</div>}
        </>
    );
};

export {MoviesList};