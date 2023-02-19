import React from 'react';
import {Badge} from "react-bootstrap";
import {Link} from "react-router-dom";

import css from './Badge.module.css';

const GenreBadge = ({ids}) => {
        const genres = JSON.parse(localStorage.getItem('Genres')) || [];
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', margin: '1px'}}>
            {genres.filter(val => ids.includes(val.id)).map(val => {
                return <Badge key={val.id} pill bg={'primary'}
                               style={{margin: '1px'}}>
                    <Link to={'/genre-movies'} className={css.badge_text} onClick={()=>localStorage.setItem('genreId', val.id)}>{val.name}</Link>
                </Badge>
            })}
        </div>
    );
}

export {GenreBadge};