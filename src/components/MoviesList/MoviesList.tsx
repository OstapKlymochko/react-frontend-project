import {FC} from 'react';

import {MovieCard} from "../MovieCard/MovieCard";
import {IMovies} from "../../interfaces";

interface IProps {
    movies: IMovies['results'];
}

const MoviesList: FC<IProps> = ({movies}) => {
    return (
        <>
            {!!movies.length &&
                <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'baseline',
                    flexWrap: 'wrap'
                }}>{movies.map(film => <MovieCard key={film.id} film={film}/>)}</div>}
        </>
    );
};

export {MoviesList};