import React from "react";
import "./Rating.scss";

const Rating = ({ ratingNumber, ratingTitle, ratingImg }) => {
    return (
        <>
            <div className="rating">
                <span>{ratingNumber}</span>
                <span>{ratingTitle}</span>
                <img src={ratingImg} alt="" />
            </div>
        </>
    )
}

export default Rating;