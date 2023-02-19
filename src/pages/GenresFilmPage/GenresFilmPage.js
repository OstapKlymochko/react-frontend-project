import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from "react-bootstrap";

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
    console.log(page);
    console.log(moviesWithGenres);
    return (
        <>
            <div className={css.movies}>
                <MoviesList movies={moviesWithGenres}/>
            </div>
            {/*<Pagination>*/}
            {/*    <Pagination.Prev onClick={() => setQuery({page: +page - 1})} disabled={+page <= 1}/>*/}
            {/*    <Pagination.Next onClick={() => setQuery({page: +page + 1})} disabled={+page >= 500}/>*/}
            {/*</Pagination>*/}
            <div className={css.pag}>
                <MoviesPagination page={page} setQuery={setQuery}/>
            </div>
        </>
    );
};

export {GenresFilmPage};