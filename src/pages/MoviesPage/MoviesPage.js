import React, {useEffect} from 'react';
import {MoviesList, MoviesPagination} from "../../components";
import {TrendsCarousel} from "../../components/TrendsCarousel/TrendsCarousel";

import css from './MoviesPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

const MoviesPage = () => {
    let {movies} = useSelector(state => state.movies);
    let dispatch = useDispatch();
    let [query, setQuery] = useSearchParams({page:'1'});
    let page = query.get('page');
    useEffect(()=>{
            dispatch(moviesActions.getAll({page}));
        },[dispatch,page]);
    return (
        <div className={css.container}>
            <div className={css.trends}><TrendsCarousel/></div>
            <div className={css.movies}>
                <MoviesList movies={movies} page={page}/>
                {/*<TrendsItem/>*/}
            </div>
            <MoviesPagination page={page}/>
            <button onClick={()=> {
                setQuery(prev => ({page: +page + 1}))
                window.scrollTo({
                    top:750,
                    behavior:'smooth'
                })
            }}>next</button>
        </div>
    );
};

export {MoviesPage};