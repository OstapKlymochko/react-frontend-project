import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreServices} from "../../services";
import {IGenres} from "../../interfaces";
import {AxiosError} from "axios";

const getAll = createAsyncThunk<IGenres['genres'], void>('genreSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data: {genres}} = await genreServices.getAll();
            localStorage.setItem('Genres', JSON.stringify(genres));
            return genres;
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response?.data);
        }
    });

interface IState {
    genres: IGenres['genres'];
}

const initialState: IState = {
    genres: [],
};
const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.genres = action.payload;
        })
});

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAll,
}
export {
    genreActions,
    genreSlice,
    genreReducer
}