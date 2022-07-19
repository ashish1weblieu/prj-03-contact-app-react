import React from "react";
import location from "../images/location-f.png";
import telphone from "../images/telephone-2.png";
import email from "../images/email-1.png";
const FooterCard = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row text-center footer-padd">
                    <h3 className="">Useful Links</h3>
                    <div>
                        <ul className="widget-body">
                            <li><a href="#!">Location</a></li>
                            <li><a href="#!">Gallery</a></li>
                            <li><a href="#!">Contact Us</a></li>
                            <li><a href="#!">About Us</a></li>
                            <li><a href="#!">Terms & Conditions</a></li>
                            <li><a href="#!">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row text-center footer-padd2">
                    <h3 className="">Contact Us</h3>
                    <div className="span-content-set">
                        <span className="contact-details"><img src={location} /> 25, ABC Road, Sector 6, Noida-101010
                        </span>
                        <span className="contact-details"><img src={telphone} /> 123-444-5555
                        </span>
                        <span className="contact-details"><img src={email} /> contact@mhmabc.com
                        </span>
                    </div>
                </div>
                <div className="social-icons">
                    <span><a href="#"><img src="https://kerrys.co.in/demo/MHMProject/assets/front/images/icons/facebook-app-symbol.png" /></a></span>
                    <span><a href="#"><img src="https://kerrys.co.in/demo/MHMProject/assets/front/images/icons/youtube-logotype.png" /></a></span>
                    <span><a href="#"><img src="https://kerrys.co.in/demo/MHMProject/assets/front/images/icons/instagram.png" /></a></span>
                    <span><a href="#"><img src="https://kerrys.co.in/demo/MHMProject/assets/front/images/icons/twitter.png" /></a></span>
                </div>
            </div>
        </footer>
    );
};
export default FooterCard;
