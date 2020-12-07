import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
    {
        id: 1,
        img: '',
        date: '',
        title: '',
        description: '',
        btnStyle: '',
    }
]

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="slider-item" style={{ background: 'url(https://preview.colorlib.com/theme/eventz/assets/img/hero/h1_hero.png)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h4>18 TO 21 DEC 2020, MIRPUR-10, DHAKA</h4>
                                <h1 style={{ fontSize: '60px' }}>Change Your Mind To Become Sucess</h1>
                                <h3 >The Biggest Digital Conference.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="slider-item" style={{ background: 'url(https://preview.colorlib.com/theme/eventz/assets/img/hero/h1_hero.png)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h4>18 TO 21 DEC 2020, MIRPUR-10, DHAKA</h4>
                                <h1 style={{ fontSize: '60px' }}>Change Your Mind To Become Sucess</h1>
                                <h3 >The Biggest Digital Conference.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="slider-item" style={{ background: 'url(https://preview.colorlib.com/theme/eventz/assets/img/hero/h1_hero.png)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h4>18 TO 21 DEC 2020, MIRPUR-10, DHAKA</h4>
                                <h1 style={{ fontSize: '60px' }}>Change Your Mind To Become Sucess</h1>
                                <h3 >The Biggest Digital Conference.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="slider-item" style={{ background: 'url(https://preview.colorlib.com/theme/eventz/assets/img/hero/h1_hero.png)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h4>18 TO 21 DEC 2020, MIRPUR-10, DHAKA</h4>
                                <h1 style={{ fontSize: '60px' }}>Change Your Mind To Become Sucess</h1>
                                <h3 >The Biggest Digital Conference.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </Slider>
    );
};

export default Carousel;