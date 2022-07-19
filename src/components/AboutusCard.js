import React from "react";
import aboutus1 from "../images/about-1.jpg";
import aboutus2 from "../images/about-2.jpg";
const AboutusCard = () => {
    return (
        <section className="padd-about" id="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <h2>HOTEL MHM SINCE 1992</h2>
                            <h5>High Quality Accommodation Services</h5>
                            <p>Lorerm ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Nul id do.Lorerm ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Nul id do.Lorerm ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Nul id do.Lorerm ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Nul id do.Lorerm ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Nul id do.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-img1">
                            <img src={aboutus1} />
                        </div>
                        <div className="about-img2">
                            <img src={aboutus2} />
                        </div>
                    </div>
                    <div>
                        <a href="#about-us"><button className="btn btn-warning submit-btn">More Details</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutusCard;
