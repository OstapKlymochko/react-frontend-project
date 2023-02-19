import React from 'react';
import {MoviesInfo} from "../../components";
import {useLocation} from "react-router-dom";
const MovieDetailsPage = () => {
    const {state} = useLocation();
    // console.log(state);
    return (
        <MoviesInfo id={state}/>
    );
};

export {MovieDetailsPage};