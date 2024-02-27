import React from "react";
import "./Navbar.scss"
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="navbar">
                <div className="search-box">
                    <span>
                        <img src="/search-img.png" alt="search-image" />
                    </span>
                    <input type="text" placeholder="Search" />
                </div>
                <div className={!show ? "nav-links" : "nav-link-window"}>
                    <ul>
                        <li>Categories</li>
                        <li>Website Builders</li>
                        <li>Today's deals</li>
                    </ul>
                </div>
                <div className="nav-icon" onClick={() => { setShow(!show) }}>
                    {!show ? <FaBars /> : <RxCross2 />}
                </div>
            </div>
        </>
    )
}

export default Navbar;