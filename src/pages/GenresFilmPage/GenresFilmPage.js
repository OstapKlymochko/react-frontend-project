import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {MoviesList, MoviesPagination} from "../../components";
import css from '../MoviesPage/MoviesPage.module.css';

const GenresFilmPage = () => {
    const genreId = localStorage.getItem('genreId');
    let [query, setQuery] = useSearchParams({page: '1'});
    let page = query.get('page');
    const {moviesWithGenres} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(moviesActions.getAllWithGenres({page, genreId}));
    }, [dispatch, page, genreId]);

    return (
        <>
            <div className={css.movies}>
                <MoviesList movies={moviesWithGenres}/>
            </div>
            <div className={css.pag}>
                <MoviesPagination page={page} setQuery={setQuery}/>
            </div>
        </>
    );
};

export {GenresFilmPage};