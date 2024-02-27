import React from "react";
import "./Badge.scss";

const Badge = ({badgeTitle}) => {
    return (
        <>
                <span className="badge-title">{badgeTitle}</span>
        </>
    )
}

export default Badge;