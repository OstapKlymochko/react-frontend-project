import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {Carousel} from "react-bootstrap";

import {postersURL} from "../../configs";
import {IMovies} from "../../interfaces";

interface IProps {
    trends: IMovies['results'];
}

const TrendsCarousel: FC<IProps> = ({trends}) => {
    return (
        <Carousel> {trends.map(trend => {
            const {id, title, release_date, poster_path} = trend;
            return (
                <Carousel.Item key={id}>
                    <img
                        className="d-block w-100"
                        style={{height: '800px'}}
                        src={`${postersURL}${poster_path}`}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3><Link to={{pathname: `/movies/${id}`,}}
                                  state={id}>{title} {release_date.split('-')[0]}</Link></h3>
                    </Carousel.Caption>

                </Carousel.Item>
            );
        })}
        </Carousel>
    );
};

export {TrendsCarousel};