import React from "react";
import "./Footer.scss"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-list">
                    <span>CATEGORIES</span>
                    <span>
                        <ul>
                            <li>Web Builder</li>
                            <li>Hosting</li>
                            <li>Data Center</li>
                            <li>Robotic-Automation</li>
                        </ul>
                    </span>
                </div>
                <div className="footer-list">
                    <span>CONTACT</span>
                    <span>
                        <ul>
                            <li>Contact</li>
                            <li>Privacy Policy</li>
                            <li>Terms Of Service</li>
                            <li>Categories</li>
                            <li>About</li>
                        </ul>
                    </span>
                </div>
                <div  className="state">
                    <span>United States</span>
                    <img src="/down-arrow.png" alt="down-arrow" />
                </div>
            </div>
        </>
    )
}

export default Footer;