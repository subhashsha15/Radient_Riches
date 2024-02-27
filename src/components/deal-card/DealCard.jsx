import React from "react";
import "./DealCard.scss";
import DealBtn from "../deal-button/DealBtn";

const DealCard = () => {
    return (
        <>
            <div className="dealCard">
                <div className="dealCard-img">
                    <img src="/deal-img.png" alt="" />
                </div>
                <div className="dealCard-info1">
                    <span>20% Off</span>
                    <span>Limited time</span>
                </div>
                <div  className="dealCard-title">
                    Webbuilder1
                </div>
                <p>
                    Computer Modern clasic with wix support
                </p>
                <div className="dealCard-info2">
                    <span>$39.96</span> 
                    <span>$49.96</span>
                    <span>(20% off)</span>
                </div>
                <DealBtn title={"View Deal"}/>
            </div>
        </>
    )
}

export default DealCard;