import React from "react";
import "./DealSection.scss";
import DealCard from "../../components/deal-card/DealCard";
import DealBtn from "../../components/deal-button/DealBtn";

const DealSection = () => {
    return (
        <>
            <div className="deal-section">
                <h1>
                    Related deals you might like for
                </h1>
                <div className="deal-section-cards">
                    <DealCard />
                    <DealCard />
                    <DealCard />
                </div>
                <div className="signup-deal">
                    <span>Sign up and get exclusive special deals</span>
                    <span>
                        <input type="email" placeholder="Email" />
                        <DealBtn title="Sign Up" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default DealSection;