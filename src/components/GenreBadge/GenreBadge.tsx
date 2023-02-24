import {FC} from 'react';
import {Badge} from "react-bootstrap";
import {Link} from "react-router-dom";

import {IGenres} from "../../interfaces";
import css from './Badge.module.css';

interface IProps {
    ids: number[];
}

const GenreBadge: FC<IProps> = ({ids}) => {
    const genres: IGenres['genres'] = JSON.parse(localStorage.getItem('Genres') || '');
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', margin: '1px'}}>
            {genres.filter(value => ids.includes(value.id)).map(val => {
                return <Badge key={val.id} pill bg={'primary'}
                              style={{margin: '1px'}}>
                    <Link to={'/genre-movies'} className={css.badge_text}
                          onClick={() => localStorage.setItem('genreId', val.id.toString())}>{val.name}</Link>
                </Badge>
            })}
        </div>
    );
};

export {GenreBadge};