import React from "react";
const VideoframeCard = () => {
    return (
        <section className="video-section" style={{backgroundImage: `url("https://kerrys.co.in/demo/MHMProject/assets/front/images/video-bg.jpg")`}}>
       <div className="container">
        <div className="row">
            <div className="video-pad">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/cr2Rrl3vz9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
           
       </div>
   </section>
    );
};
    
export default VideoframeCard;
