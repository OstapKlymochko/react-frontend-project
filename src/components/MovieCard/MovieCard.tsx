import {FC} from 'react';
import {Link} from "react-router-dom";

import css from './MovieCard.module.css';
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";

interface IProps {
    film: IMovie
}

const MovieCard: FC<IProps> = ({film}) => {
    const {id, title, vote_average, vote_count, poster_path, release_date, genre_ids} = film;
    return (
        <div className={css.card}>
            <PosterPreview path={poster_path!}/>
            <StarsRating rate={vote_average}/>
            <p>{vote_count} votes</p>
            <Link to={`/movies/${id}`} state={id}>{title}</Link>
            <p>{release_date.split('-')[0]}</p>
            <GenreBadge ids={genre_ids}/>
        </div>
    );
};

export {MovieCard};