import React from 'react';

import css from './MovieInfo.module.css';
import {postersURL} from "../../configs/urls";
import {StarsRating} from "../StarsRating/StarsRating";
import {FilmImages} from "../FilmImages/FilmImages";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import YouTube from "react-youtube";

const MoviesInfo = ({details, images, trailer}) => {
    console.log(details);
    console.log(images);
    console.log(trailer);

    return (
        details &&
        <div className={css.container}>
            <div className={css.image_data}>
                <div className={css.poster_div}>
                    <img src={
                        details.poster_path ? `${postersURL}/${details.poster_path}` : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'
                    } alt="poster" className={css.poster}/>
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
                            <GenreBadge ids={details.genres.map(val => val.id)}/>
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
            <div>
                <StarsRating rate={details.vote_average}/>
                <span className={css.text}>{details.vote_count} votes</span>
            </div>
            <div className={css.movie_images}>
                {images && <FilmImages images={images}/>}
            </div>
            {/*{trailer && <YouTube videoId={trailer.key} />}*/}
            {trailer && <iframe src={`http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"`}></iframe>}
        </div>
    );
}

export {MoviesInfo};