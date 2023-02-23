import {FC} from 'react';
import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MoviesList, MoviesPagination} from "../../components";
import css from "../MoviesPage/MoviesPage.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";


const SearchFilmPage: FC = () => {

    const {moviesByKeyWords} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const keywords = localStorage.getItem('keywords') || null;
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    useEffect(() => {
        if (keywords) {
            dispatch(moviesActions.getAllByKeyWord({page: +page!, keywords}));
        }
    }, [page, keywords, dispatch]);
    return (
        moviesByKeyWords &&
        <>
            <div className={css.movies}>
                <MoviesList movies={moviesByKeyWords?.results ? moviesByKeyWords?.results : []}/>
            </div>
            <div className={css.pag}>
                <MoviesPagination page={+page!} setQuery={setQuery} count={moviesByKeyWords?.total_pages}/>
            </div>
        </>
    );
};

export {SearchFilmPage};