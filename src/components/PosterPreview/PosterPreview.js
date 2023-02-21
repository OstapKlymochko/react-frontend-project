import React from 'react';

import {postersURL} from "../../configs/urls";

const PosterPreview = ({path}) => {
    const imgLink = path ? `${postersURL}${path}` : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';
    return (
        <img src={imgLink} alt="emptyPoster"/>
    );
};

export {PosterPreview};