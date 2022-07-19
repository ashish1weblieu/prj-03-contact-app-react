import React from "react";
import document from "../images/document.png";
import guestlist from "../images/guest-list.png";
import businessman from "../images/businessman.png";
import timetable from "../images/timetable.png";
import livechat from "../images/live-chat.png";
import bill from "../images/bill.png";
const Homefeatures = () => {
    return (
        <section>
            <div className="container" id="features">
                
                    <div className="features-section" >
                        <h2>Features</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-2 perticular-featured-box">
                            <div className="feature-icon-set">
                                <img src={document} alt="user" />
                                <p>Business Reports</p>
                            </div>
                        </div>
                         <div className="col-md-2 perticular-featured-box">
                            <div className="feature-icon-set">
                                <img src={guestlist} alt="user" />
                                <p>Guest List Management</p>
                            </div>
                        </div>
                        <div className="col-md-2 perticular-featured-box">
                            <div className="feature-icon-set">
                                <img src={businessman} alt="user" />
                                <p>Occupancy Chart Management</p>
                            </div>
                        </div>
                        <div className="col-md-2 perticular-featured-box">
                            <div className="feature-icon-set">
                                <img src={timetable} alt="user" />
                                <p>Day Book Management</p>
                            </div>
                        </div>
                        <div className="col-md-2 perticular-featured-box">
                            <div className="feature-icon-set">
                                <img src={livechat} alt="user" />
                                <p>Live Chat</p>
                            </div>
                        </div>
                        <div className="col-md-2 perticular-featured-box">
                            <div className="feature-icon-set">
                                <img src={bill} alt="user" />
                                <p>Bill Generation</p>
                            </div>
                        </div>
                        <div className="col-md-2 perticular-featured-box">
                            <div className="feature-icon-set">
                                <img src="https://kerrys.co.in/demo/MHMProject/./assets/featureImage/1657186959.png" alt="user" />
                                <p>Connect with other hoteliers</p>
                            </div>
                        </div>
                        <div className="col-md-2 perticular-featured-box">
                            <div className="feature-icon-set">
                                <img src="https://kerrys.co.in/demo/MHMProject/./assets/featureImage/1657186881.png" alt="user" />
                                <p>Bill Book</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};
export default Homefeatures;