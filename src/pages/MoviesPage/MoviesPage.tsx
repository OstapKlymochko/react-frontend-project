import {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import css from "./MoviesPage.module.css";
import {MoviesList, MoviesPagination, TrendsCarousel} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks";

const MoviesPage: FC = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const {movies, trends} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(moviesActions.getAll({page: +page!}));
        dispatch(moviesActions.getTrends())
    }, [dispatch, page]);

    return (
        <div className={css.container}>
            {trends && <div className={css.trends}><TrendsCarousel trends={trends}/></div>}

            <div className={css.movies}>
                <MoviesList movies={movies}/>
            </div>

            <div className={css.pag}>
                <MoviesPagination page={+page!} setQuery={setQuery} count={null}/>
            </div>
        </div>
    );
};

export {MoviesPage};