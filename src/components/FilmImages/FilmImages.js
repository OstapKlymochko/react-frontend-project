import React from 'react';
import shortid from "shortid";

import {postersURL} from "../../configs/urls";

const FilmImages = ({images}) => {
    const path = postersURL.replace('original', 'w780');
    return (
        <div>
            {images && images.map((img) => <img key={shortid.generate()} src={`${path}/${img.file_path}`} alt="filmPhoto"/>)}
        </div>
    );
};

export {FilmImages};