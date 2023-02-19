import React from 'react';

import {postersURL} from "../../configs/urls";

const PosterPreview = ({path}) => {
    return (
        <img src={`${postersURL}${path}`} alt=""/>
    );
};

export {PosterPreview};