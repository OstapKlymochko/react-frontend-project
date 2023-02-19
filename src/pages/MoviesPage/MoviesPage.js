import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {MoviesList, MoviesPagination} from "../../components";
import {TrendsCarousel} from "../../components/TrendsCarousel/TrendsCarousel";
import css from './MoviesPage.module.css'
import {moviesActions} from "../../redux";
import {GenresLinksList} from "../../components/GenresLinksList/GenresLinksList";

const MoviesPage = () => {
    let [query, setQuery] = useSearchParams({page: '1', with_genres:null});
    let page = query.get('page');
    let genre_id = query.get('with_genres');
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(moviesActions.getAll({page,genre_id}));
    }, [dispatch, page,genre_id]);

    return (
        <div className={css.container}>
            <div className={css.trends}><TrendsCarousel/></div>
            <div className={css.moviesGenres}>
                <div className={css.movies}>
                    <MoviesList movies={movies}/>
                </div>
                {/*<div className={css.genres}>*/}
                {/*    <GenresLinksList/>*/}
                {/*</div>*/}
            </div>
            <div className={css.pag}>
                <MoviesPagination page={page} setQuery={setQuery}/>
            </div>
        </div>
    );
};

export {MoviesPage};