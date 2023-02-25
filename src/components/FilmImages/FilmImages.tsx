import {FC} from 'react';
import shortid from "shortid";

import {postersURL} from "../../configs";
import {IPhotos} from "../../interfaces";

interface IProps{
    images:IPhotos['backdrops'];
}

const FilmImages:FC<IProps>  = ({images}) => {
    const path = postersURL.replace('original', 'w780');
    return (
        <div>
            {images && images.map((img) => <img key={shortid.generate()} src={`${path}/${img.file_path}`} alt="filmPhoto"/>)}
        </div>
    );
};

export {FilmImages};