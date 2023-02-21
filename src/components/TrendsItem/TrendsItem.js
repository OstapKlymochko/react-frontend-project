import React from 'react';
import {Carousel} from "react-bootstrap";


const TrendsItem = ({title, release_date}) => {
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>{title} {release_date}</h3>
            </Carousel.Caption>
        </Carousel.Item>
    );
};

export {TrendsItem};