import React from 'react';
import {useLocation} from "react-router-dom";

import {MoviesInfo} from "../../components";

const MovieDetailsPage = () => {
    const {state} = useLocation();
    // console.log(state);
    return (
        <MoviesInfo id={state}/>
    );
};

export {MovieDetailsPage};