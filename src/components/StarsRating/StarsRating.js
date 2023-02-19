import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({rate}) => {
    return (
        <div>
            <StarRatings name={'rating'} starRatedColor={'rgb(200, 180, 22)'} starDimension={'20px'} starSpacing={'1px'} rating={rate} numberOfStars={10} />
        </div>
    );
};

export {StarsRating};