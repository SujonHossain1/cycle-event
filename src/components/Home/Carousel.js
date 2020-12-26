import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
    {
        id: 1,
        img: 'https://preview.colorlib.com/theme/eventz/assets/img/hero/h1_hero.png',
        location: '18 TO 21 DEC 2020, MIRPUR-10, DHAKA',
        title: 'Change Your Mind To Become Sucess',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi unde, dolor obcaecati quae harum cupiditate error nemo tempora dolores perferendis tenetur quo ducimus, consequatur a ipsa? Optio voluptates illum pariatur.',
        btnStyle: 'btn btn-warning',
    },
    {
        id: 2,
        img: 'https://preview.colorlib.com/theme/manup/img/blog/latest-b/latest-2.jpg',
        location: ' 20-23 January 2021 - Los Angeles CA',
        title: 'Annual Business Sucess Story',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi unde, dolor obcaecati quae harum cupiditate error nemo tempora dolores perferendis tenetur quo ducimus, consequatur a ipsa? Optio voluptates illum pariatur.',
        btnStyle: 'btn btn-primary',
    },
    {
        id: 3,
        img: 'https://preview.colorlib.com/theme/meetup/images/gallery-2.jpg',
        location: ' 20-23 January 2021 - Los Angeles CA',
        title: 'Annual Business Sucess Story',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi unde, dolor obcaecati quae harum cupiditate error nemo tempora dolores perferendis tenetur quo ducimus, consequatur a ipsa? Optio voluptates illum pariatur.',
        btnStyle: 'btn btn-primary',
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
            {
                carouselData.map((item) => (
                    <div>
                        <div key={item.id} className="slider-item" style={{ background: ` linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.img}) ` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h4> {item.location} </h4>
                                        <h1 style={{ fontSize: '50px' }}> {item.title} </h1>
                                        <p> <strong>{item.description}</strong> </p>
                                        <button className={`${item.btnStyle} mt-2`}>Get A Ticket</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    );
};

export default Carousel;