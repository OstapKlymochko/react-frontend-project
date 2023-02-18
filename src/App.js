import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieDetailsPage, MoviesPage} from "./pages";
import {useTheme} from "./hooks/useTheme";

const App = () => {

    let {theme, setTheme} = useTheme();
    return (
        // <>
        //   <MoviesList/>
        // </>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route exact path={'/movies/:id'} element={<MovieDetailsPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};