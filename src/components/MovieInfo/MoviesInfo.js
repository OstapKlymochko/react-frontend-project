import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Badge} from "react-bootstrap";

import {moviesActions} from "../../redux";
import css from './MovieInfo.module.css';
import {postersURL} from "../../configs/urls";
import {StarsRating} from "../StarsRating/StarsRating";
import {FilmImages} from "../FilmImages/FilmImages";

const MoviesInfo = ({id}) => {
    const {details, images} = useSelector(state => state.movies);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(moviesActions.getById({id}));
        dispatch(moviesActions.getImages({id}));
    }, [id, dispatch]);
    console.log(images);
    //     const {
    //         poster_path, genres, overview, status, tagline, vote_average, vote_count,
    //         production_countries, production_companies, release_date, runtime, spoken_languages
    //     } = details;
    return (
        details &&
        <div className={css.container}>
            <div className={css.image_data}>
                <div className={css.poster_div}>
                    <img src={`${postersURL}/${details.poster_path}`} alt="poster" className={css.poster}/>
                    <StarsRating rate={details.vote_average}/>
                    <span className={css.text}>{details.vote_count} votes</span>
                </div>
                <div className={css.data}>
                    <div>
                        <h2 className={css.titles}>Title: </h2>: <span
                        className={css.text}>{details.original_title}</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Slogan: </h2>: <span
                        className={css.text}>"{details.tagline}"</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Release date: </h2>
                        <span className={css.text}>{details.release_date}</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Country: </h2>
                        <span className={css.text}>
                            {details.production_countries.map((country, index) => {
                                const sep = index !== details.production_countries.length - 1 ? ', ' : '';
                                return `${country.name}${sep}`;
                            })}
                        </span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Genres: </h2>
                        <span className={css.text}>
                            {details.genres.map(genre => <Badge key={genre.id} pill bg={'primary'}
                                                                style={{margin: '1px'}}>{genre.name}</Badge>)}
                        </span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Runtime:</h2>
                        <span className={css.text}>{details.runtime} min</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Overview: </h2>
                        <span className={css.text}>{details.overview}</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Companies: </h2>
                        <span className={css.text}>
                            {details.production_companies.map((cmp, index) => {
                                const sep = index !== details.production_companies.length - 1 ? ', ' : '';
                                return `${cmp.name}${sep}`;
                            })}</span>
                    </div>
                </div>
            </div>

            <div className={css.movie_images}>
                {images && <FilmImages images={images}/>}
            </div>
        </div>
    );
}

export {MoviesInfo};