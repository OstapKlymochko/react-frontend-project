import {FC} from 'react';

import {postersURL} from "../../configs";
import css from "../MovieCard/MovieCard.module.css";

interface IProps {
    path: string
}

const PosterPreview: FC<IProps> = ({path}) => {
    const imgLink = path ? `${postersURL}${path}` : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';
    return (
        <img src={imgLink} alt="emptyPoster" className={css.poster}/>
    );
};

export {PosterPreview};