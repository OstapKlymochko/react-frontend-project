import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesServices} from "../../services/moviesServices";

const initialState = {
    movies: [],
    trends: [],
    details: null,
    images: [],
}

const getAll = createAsyncThunk('moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data: {results}} = await moviesServices.getAll(page);
            return results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data)
        }
    })

const getTrends = createAsyncThunk('moviesSlice/getTrends',
    async (_, thunkAPI) => {
        try {
            const {data: {results}} = await moviesServices.getTodayTrends();
            return results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data);
        }
    });
const getById = createAsyncThunk('moviesSlice/getById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await moviesServices.getById(id);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data);
        }
    });
const getImages = createAsyncThunk('moviesSlice/getImages',
    async ({id}, thunkAPI) => {
        try {
            const {data: {backdrops}} = await moviesServices.getImages(id)
            return backdrops.slice(0, 5);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response?.data);
        }
    })

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
        .addCase(getTrends.fulfilled, (state, action) => {
            state.trends = action.payload;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.details = action.payload;
        })
        .addCase(getImages.fulfilled, (state, action) => {
            state.images = action.payload;
        })
})

const {reducer: movieReducer} = moviesSlice;

const moviesActions = {
    getAll,
    getTrends,
    getById,
    getImages
}

export {
    moviesActions,
    moviesSlice,
    movieReducer
}