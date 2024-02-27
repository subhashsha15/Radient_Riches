import React, { useState } from "react";
import './MainMiddleSection.scss';
import DealBtn from "../../components/deal-button/DealBtn";
import Rating from "../../components/rating/Rating";
import productInfo from "../../../src/productInfo"
import Badge from "../../components/badge/Badge";
const MainMiddleSection = () => {
    const [showMore, setShowMore] = useState({});
    const showMoreHandler = (productId) => {
        setShowMore(prevState => ({
            ...prevState,
            [productId]: !prevState[productId]
        }));
    }

    return (
        <div className="mainMiddle-container">
            {
                productInfo.map((product) => (
                    <>
                        < div key={product.id} className="mainMiddle-section">
                            <div className="mainMiddle-section-sec1">
                                <div className="product-id">{product.id}</div>
                                <img src={product.image} alt="" />
                                <span>{product.imageTitle}</span>
                            </div>
                            {product.badgeTitle &&
                                (<div className="badge-container">
                                    <Badge badgeTitle={product.badgeTitle} />
                                </div>)}
                            <div className="mainMiddle-section-sec2">
                                <p className="mainMiddle-section-sec2-para1">
                                    <span className="mainMiddle-section-sec2-para1-title">{product.para1_Heading}</span>
                                    {product.para1_content}
                                </p>
                                {
                                    product.discountPercent &&
                                    (<div className="offer-percent">{product.discountPercent}</div>)
                                }
                                <p className="mainMiddle-section-sec2-para2">

                                    {showMore[product.id] && (
                                        <>
                                            <h2>Main highlights</h2>
                                            {
                                                Array.isArray(product.para2_content) ?
                                                    (<div className="highlights-list">
                                                        {
                                                            product.para2_content.map((item) => (
                                                                <>
                                                                    <div>
                                                                        <span className="highlights-list-rating">{item.rating}</span>
                                                                        <span className="highlights-list-title">{item.title}</span>
                                                                    </div>
                                                                </>
                                                            ))}
                                                    </div>) :
                                                    (<p>
                                                        {product.para2_content}
                                                    </p>)
                                            }
                                            {
                                                product.additionalFeature && (
                                                    <>
                                                        <div className="additional-feature">
                                                            <span>Why we love it</span>
                                                            {product.additionalFeature.map((item, index) => (
                                                                <div key={index} className="additional-feature-items">
                                                                    <img src="/blue-tick-img.png" alt="" />
                                                                    <span>{item}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </>
                                    )}
                                </p>
                                <span className={showMore[product.id] ? "show-more-btn rotate-clockwise" : "show-more-btn"} onClick={() => showMoreHandler(product.id)}>
                                    <span>Show {showMore[product.id] ? "less" : "more"}</span>
                                    <img src="/down-arrow-blue.png" alt="" />
                                </span>
                            </div>
                            <div className="mainMiddle-section-sec3">
                                <div className="mainMiddle-section-sec3-rating">
                                    <Rating ratingNumber={product.ratingNumber} ratingTitle={product.ratingTitle} ratingImg={product.ratingImg} />
                                </div>
                                <div className="mainMiddle-section-sec3-dealbtn">
                                    <DealBtn title="View" />
                                </div>
                            </div>
                        </div >
                    </>
                ))
            }
        </div >
    )
}

export default MainMiddleSection;