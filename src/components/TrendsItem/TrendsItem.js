import React from 'react';
import {Carousel} from "react-bootstrap";

import {postersURL} from "../../configs/urls";

const TrendsItem = ({title, release_date}) => {
    // const {trends} = useSelector(state => state.movies);
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(moviesActions.getTrends())
    // },[dispatch]);
    // const {title, release_date, poster_path} = props;
    // console.log(props.props);
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                // src={`${postersURL}${poster_path}`}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>{title} {release_date}</h3>
                {/*<p></p>*/}
            </Carousel.Caption>
        </Carousel.Item>
    );
};

export {TrendsItem};