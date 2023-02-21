import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MoviesList, MoviesPagination} from "../../components";
import css from "../MoviesPage/MoviesPage.module.css";

const SearchFilmPage = () => {

    const {moviesByKeyWords: {results: moviesByKeyWords, total_pages}} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const keywords = localStorage.getItem('keywords') || null;

    const [query, setQuery] = useSearchParams({page: '1'});
    let page = query.get('page');
    useEffect(() => {
        if (keywords) {
            dispatch(moviesActions.getAllByKeyWord({page, keywords}));
        }
    }, [page, keywords, dispatch]);
    return (
        <>
            <div className={css.movies}>
                <MoviesList movies={moviesByKeyWords ? moviesByKeyWords : []}/>
            </div>
            <div className={css.pag}>
                <MoviesPagination page={page} setQuery={setQuery} pagesCount={total_pages}/>
            </div>
        </>
    );
};

export {SearchFilmPage};