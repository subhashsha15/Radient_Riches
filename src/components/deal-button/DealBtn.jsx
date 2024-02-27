import React from "react";
import "./DealBtn.scss";

const DealBtn = ({title}) => {
    return (
        <>
            <div className="dealBtn">
               <button>{title}</button>
            </div>
        </>
    )
}

export default DealBtn;