import {FC} from 'react';
import {postersURL} from "../../configs";
import {IPhotos} from "../../interfaces";
import shortid from "shortid";

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