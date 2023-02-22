import React from 'react';
import shortid from "shortid";

import css from './MovieInfo.module.css';
import {postersURL} from "../../configs/urls";
import {StarsRating} from "../StarsRating/StarsRating";
import {FilmImages} from "../FilmImages/FilmImages";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {Trailer} from "../Trailer/Trailer";

const MoviesInfo = ({details, images, trailer}) => {
    const {
        id, poster_path, original_title, tagline, release_date, production_countries, genres,
        runtime, overview, production_companies, vote_average, vote_count
    } = details;

    const companies = production_companies.map((cmp, index) => {
        const sep = index !== production_companies.length - 1 ? ', ' : '';
        return `${cmp.name}${sep}`;
    })
    const countries = production_countries.map((country, index) => {
        const sep = index !== details.production_countries.length - 1 ? ', ' : '';
        return `${country.name}${sep}`;
    });
    const path = poster_path ? `${postersURL}/${poster_path}` : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';
    return (
        details &&
        <div className={css.container}>
            <div className={css.image_data}>
                <div className={css.poster_div}>
                    <img src={path} key={shortid.generate()} alt="poster" className={css.poster}/>
                </div>
                <div className={css.data}>
                    <div>
                        <h2 className={css.titles}>Title: </h2>: <span
                        className={css.text}>{original_title}</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Slogan: </h2>: <span
                        className={css.text}>"{tagline}"</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Release date: </h2>
                        <span className={css.text}>{release_date}</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Country: </h2>
                        <span className={css.text}>
                            {countries}
                        </span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Genres: </h2>
                        <span className={css.text}>
                            <GenreBadge ids={genres.map(val => val.id)}/>
                        </span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Runtime:</h2>
                        <span className={css.text}>{runtime} min</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Overview: </h2>
                        <span className={css.text}>{overview}</span>
                    </div>
                    <div>
                        <h2 className={css.titles}>Companies: </h2>
                        <span className={css.text}>
                            {companies}</span>
                    </div>
                </div>
            </div>
            <div>
                <StarsRating rate={vote_average}/>
                <span className={css.text}>{vote_count} votes</span>
            </div>
            <div className={css.movie_images}>
                {images && <FilmImages images={images}/>}
            </div>

            <div className={css.trailer}>{trailer && <Trailer trailer={trailer} id={id}/>}
            </div>
        </div>
    );
}

export {MoviesInfo};