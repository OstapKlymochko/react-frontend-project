import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/moviesSlice";
import {genreReducer} from "./slices/genresSlice";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setUpStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppDispatch,
    AppStore
}
export {
    setUpStore
}