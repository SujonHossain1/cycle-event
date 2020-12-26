import React from 'react';
import img1 from '../../assets/images/course01.jpg'
import img2 from '../../assets/images/course02.jpg'
import img3 from '../../assets/images/course03.jpg';
import img4 from '../../assets/images/course04.jpg';
import img5 from '../../assets/images/course07.jpg';
import img6 from '../../assets/images/course06.jpg';

const gallery = [
    {
        id: 1,
        img: img1,
    },
    {
        id: 2,
        img: img2,
    },
    {
        id: 3,
        img: img3,
    },
    {
        id: 4,
        img: img4,
    },
    {
        id: 5,
        img: img5,
    },
    {
        id: 6,
        img: img6,
    }
]

const Gallery = () => {
    return (

        <div class="container mb-4">
            <div className="blog-section-text pt-4 pb-2">
                <h4 className="title-style">Gallery </h4>
            </div>

            <div class="row">
                {
                    gallery.map((item) => (
                        <div class="col-md-4  py-2">
                            <div class="course">
                                <img class=" img-fluid rounded" src={item.img} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>

    );
};

export default Gallery;