import React from "react";
import banner1 from "../images/Banner-1.jpg";
const BannerCard = () => {
    return (
        //     <main className="main bottom-header-bg">
        //     <div className="container-fluid">
        //         <div className="row">
        //             <div className="bottom-header-content">
        //                 <h3>Welcome To</h3>
        //                 <h1>HOTEL MHM</h1>
        //                 <p>Lorerm ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Nul id do.</p>
        //             </div>
        //         </div>
        //     </div>
        // </main>
        <section className="main-section">
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={banner1} />
                        <div className="slider-content">
                            <h3>Welcome To</h3>
                            <h1>HOTEL MHM</h1>
                            <p>Lorerm ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
    
export default BannerCard;
