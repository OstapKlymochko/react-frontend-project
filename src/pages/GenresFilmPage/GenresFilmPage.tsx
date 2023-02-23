import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MoviesList, MoviesPagination} from "../../components";
import css from '../MoviesPage/MoviesPage.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";

const GenresFilmPage = () => {
    const genreId = localStorage.getItem('genreId');
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const {moviesWithGenres} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(moviesActions.getAllWithGenres({page:+page!, genreId:+genreId!}));
    }, [dispatch, page, genreId]);
    return (
        <>
            <div className={css.movies}>
                <MoviesList movies={moviesWithGenres}/>
            </div>
            <div className={css.pag}>
                <MoviesPagination page={+page!} setQuery={setQuery} count={null}/>
            </div>
        </>
    );
};

export {GenresFilmPage};