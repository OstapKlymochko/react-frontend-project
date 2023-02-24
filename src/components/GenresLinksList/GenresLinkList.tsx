import React, {FC} from 'react';

import css from "./GenresLinkList.module.css";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {IGenres} from "../../interfaces";


const GenresLinksList: FC = () => {
    const genres: IGenres['genres'] = JSON.parse(localStorage.getItem('Genres') || '') || [];
    return (
        <div className={css.genresContainer}>
            <h3>Pick up a genre:</h3>
            <GenreBadge ids={genres.map(val => val.id)}/>
        </div>
    );
};

export {GenresLinksList};
