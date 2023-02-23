import {FC, useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "./hooks";
import {genreActions} from "./redux";
import {MainLayout} from "./layouts/MainLayout";
import {GenresFilmPage, MovieDetailsPage, MoviesPage, SearchFilmPage} from "./pages";
import {Simulate} from "react-dom/test-utils";

const App: FC = () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genreActions.getAll());
        if(!!genres.length){
        }
    }, [dispatch]);
        localStorage.setItem('Genres', JSON.stringify(genres));
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'/movies/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'/genre-movies'} element={<GenresFilmPage/>}/>
                <Route path={'/search-movies'} element={<SearchFilmPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};