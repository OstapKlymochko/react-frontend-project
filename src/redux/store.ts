import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/moviesSlice";

const rootReducer = combineReducers({
    movieReducer
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