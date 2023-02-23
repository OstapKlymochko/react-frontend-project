import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesServices} from "../../services";
import {IDetails, IMovies, IPhotos} from "../../interfaces";
import {AxiosError} from "axios";

interface IMovieKeyword {
    results: IMovies['results'];
    total_pages: number;
}

interface IState {
    movies: IMovies['results'];
    trends: IMovies['results'] | [];
    details: IDetails | null;
    images: IPhotos['backdrops'];
    moviesWithGenres: IMovies['results'];
    moviesByKeyWords: IMovieKeyword | {};
    trailerPath: string | null;
}

const initialState: IState = {
    movies: [],
    trends: [],
    details: null,
    images: [],
    moviesWithGenres: [],
    moviesByKeyWords: {},
    trailerPath: null
}

const getAll = createAsyncThunk<IMovies['results'], { page: number }>('moviesSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesServices.getAll(page);
            return data.results;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    })

const getAllWithGenres = createAsyncThunk<IMovies['results'], { page: number, genreId: number }>('moviesSlice/getAllWithGenres',
    async ({page, genreId}, thunkAPI) => {
        try {
            const {data: {results}} = await moviesServices.getAllWithGenres(genreId, page);
            return results;
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response?.data);
        }
    })

const getAllByKeyWord = createAsyncThunk<IMovieKeyword, { page: number, keywords: string }>('moviesSlice/getAllWithKeyWord',
    async ({page, keywords}, thunkAPI) => {
        try {
            const {data: {results, total_pages}} = await moviesServices.getAllByKeyword(keywords, page);
            return {results, total_pages}
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response?.data);
        }
    });

const getTrends = createAsyncThunk<IMovies['results'], void>('moviesSlice/getTrends',
    async (_, thunkAPI) => {
        try {
            const {data: {results}} = await moviesServices.getTodayTrends();
            return results;
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response?.data);
        }
    });
const getById = createAsyncThunk<IDetails, { id: number }>('moviesSlice/getById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await moviesServices.getById(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response?.data);
        }
    });
const getImages = createAsyncThunk<IPhotos['backdrops'], { id: number }>('moviesSlice/getImages',
    async ({id}, thunkAPI) => {
        try {
            const {data: {backdrops}} = await moviesServices.getImages(id)
            return backdrops.slice(0, 5);
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response?.data);
        }
    })

const getTrailer = createAsyncThunk<string, { id: number }>('moviesSlice/getTrailer',
    async ({id}, thunkAPI) => {
        try {
            const {data: {results}} = await moviesServices.getVideos(id);
            return results.filter(value => value.type === 'Trailer')[0].key;
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response?.data);
        }
    });

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
        .addCase(getAllWithGenres.fulfilled, (state, action) => {
            state.moviesWithGenres = action.payload;
        })
        .addCase(getAllByKeyWord.fulfilled, (state, action) => {
            state.moviesByKeyWords = action.payload;
        })
        .addCase(getTrailer.fulfilled, (state, action) => {
            state.trailerPath = action.payload;
        })
        .addCase(getTrailer.rejected, state => {
            state.trailerPath = null;
        })
})

const {reducer: movieReducer} = moviesSlice;

const moviesActions = {
    getAll,
    getTrends,
    getById,
    getImages,
    getAllWithGenres,
    getAllByKeyWord,
    getTrailer,

}

export {
    moviesActions,
    moviesSlice,
    movieReducer
}