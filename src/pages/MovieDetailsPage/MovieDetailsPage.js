import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {MoviesInfo} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

const MovieDetailsPage = () => {
    const {state} = useLocation();
    const {details, images, trailerPath} = useSelector(state => state.movies);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(moviesActions.getById({id: state}));
        dispatch(moviesActions.getImages({id: state}));
        dispatch(moviesActions.getTrailer({id: state}));
    }, [state, dispatch]);
    return (
        <MoviesInfo details={details} images={images} trailer={trailerPath}/>
    );
};

export {MovieDetailsPage};