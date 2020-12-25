import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/images/blog/blog-1.jpg';
import img2 from '../../assets/images/blog/blog-2.jpg';
import img3 from '../../assets/images/blog/blog-3.jpg';
const LeaderCarousel = () => {
    return (
        <div className="gallerys">
            <div className="row">
                {/* <div className="col-md-6 col-lg-4 col-sm-6 col-12 mt-3">
                    <a href={img1}>
                        <img src={img1} alt="" className="img-fluid" />
                    </a>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6 col-12 mt-3">
                    <a href={img1}>
                        <img src={img2} alt="" className="img-fluid" />
                    </a>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6 col-12 mt-3">
                    <a href={img1}>
                        <img src={img3} alt="" className="img-fluid" />
                    </a>
                </div> */}

            </div>
        </div>
    );
};

export default LeaderCarousel;