import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genreActions} from "../../redux";
import {Badge} from "react-bootstrap";

const GenreBadge = ({ids}) => {
    let {genres} = useSelector(state => state.genres);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);
    return (
        <div style={{display:'flex', flexWrap:'wrap', margin:'1px'}}>
            {/*{ids.map(val => <span key={val}  className="badge rounded-pill text-bg-primary">{genres.val}</span>)}*/}
            {genres.filter(val => ids.includes(val.id)).map(val=> {
                return <Badge key={val.id} pill bg={'primary'}>{val.name}</Badge>
            })}
        </div>
    );
}

export {GenreBadge};