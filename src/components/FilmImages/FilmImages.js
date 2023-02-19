import React from 'react';

import {postersURL} from "../../configs/urls";

const FilmImages = ({images}) => {
    return (
        <div>
            {images && images.map((img, index) => <img key={index+1} src={`${postersURL}${img.file_path}`} alt="filmPhoto"/>)}
        </div>
    );
};

export {FilmImages};