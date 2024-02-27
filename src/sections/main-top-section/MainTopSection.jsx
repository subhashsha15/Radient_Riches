import React from "react";
import "./MainTopSection.scss";

const MainTopSection = () => {
    return (
        <>
            <div className="mainTop-section">
                <h1>
                    Best Website builders in the US
                </h1>
                <div className="mainTop-section-sec1">
                    <div>
                        <span>
                            <img src="/tick-img.png" alt="" />
                            <span>Last Updated</span>
                            <span>-</span>
                            <span>February 22, 2020</span>
                        </span>
                        <span>
                            <img src="/i-img.png" alt="" />
                            <span>Advertising Disclosure</span>
                        </span>
                    </div>
                    <div>
                        <span>Top Relevant</span>
                        <img src="/down-arrow-dark.png" alt="" />
                    </div>
                </div>
                <div className="mainTop-section-sec2">
                    <span>Tools</span>
                    <span>AWS Builder</span>
                    <span>Start Build</span>
                    <span>Build Supplies</span>
                    <span>Tooling</span>
                    <span>BlueHosting</span>
                </div>
                <div className="mainTop-section-sec3">
                    <span>
                        <span>Home</span>
                        <img src="/right-arrow.png" alt="" />
                    </span>
                    <span>
                        <span>Hosting for all</span>
                        <img src="/right-arrow.png" alt="" />
                    </span>
                    <span>
                        <span>Hosting</span>
                        <img src="/right-arrow.png" alt="" />
                    </span>
                    <span>
                        <span>Hosting6</span>
                        <img src="/right-arrow.png" alt="" />
                    </span>
                    <span>
                        <span>Hosting5</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default MainTopSection;