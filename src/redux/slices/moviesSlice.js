import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesServices} from "../../services/moviesServices";

const initialState = {
    movies: [],
    next: null,
    prev: null,
    errors: null,
    loading: null
}

let getAll = createAsyncThunk('moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data: {results}} = await moviesServices.getAll();
            return results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data)
        }
    })


let moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
})

const {reducer: movieReducer} = moviesSlice;

const carActions = {
    getAll
}

export {
    carActions,
    moviesSlice,
    movieReducer
}