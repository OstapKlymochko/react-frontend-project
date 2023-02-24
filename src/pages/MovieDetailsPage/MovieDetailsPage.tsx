import {FC, useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {moviesActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {MovieInfo} from "../../components";

interface IProps {

}

const MovieDetailsPage: FC<IProps> = () => {
    const {state: id} = useLocation();
    const {details, images, trailerPath} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(moviesActions.getTrailer({id}));
        dispatch(moviesActions.getById({id}));
        dispatch(moviesActions.getImages({id}));
    }, [dispatch, id]);
    return (
        details && <MovieInfo details={details} images={images} trailer={trailerPath!}/>
    );
};

export {MovieDetailsPage};