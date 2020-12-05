import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 3000,
    };
    return (       
            <Slider {...settings}>
                <div className="slider-item" >
                    <div className="container">
                        <h4>5 TO 9 MAY 2019, MARDAVALL HOTEL, NEW YORK</h4>
                        <h1>Change Your Mind To Become Sucess</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <button className="btn btn-primary">Buy Ticket</button>
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>

            </Slider>
    );
};

export default Carousel;