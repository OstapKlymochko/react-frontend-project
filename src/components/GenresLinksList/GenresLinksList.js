import React from 'react';
import {Link} from "react-router-dom";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const GenresLinksList = () => {
    const genres = JSON.parse(localStorage.getItem('Genres')) || [];
    return (
        <>
            <GenreBadge ids={genres.map(val => val.id)}/>
        </>
    );
};

export {GenresLinksList};