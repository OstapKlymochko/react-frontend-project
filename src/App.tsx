import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks";
import {moviesActions} from "./redux";


const App: FC = () => {
    let dispatch = useAppDispatch();
    let {details} = useAppSelector(state => state.movieReducer);
    useEffect(()=>{
        dispatch(moviesActions.getById({id:288097}));
    },[dispatch]);
    console.log(details);
    return (
        <div>
            App
        </div>
    );
};

export {App};