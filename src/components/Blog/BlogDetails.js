import React from 'react';
import img1 from '../../assets/images/blog/blog-1.jpg'
import {
    FaCalendar,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTags,
    FaTwitter,
    FaUserAlt
} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum dolores eius aliquam cupiditate, labore tempora. Id magnam repellat, optio quod ipsam, corrupti, incidunt voluptates cumque est molestias exercitationem recusandae!"
const BlogDetails = () => {
    const {id} = useParams();
    
    return (

        <div className="container">

            <div className="row">
                <div className="blog-section-text py-5">
                    <h2 className="title-style">Blog Details</h2>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <img className="card-img-top" src={img1} alt="Not found" />
                        <div className="card-body">
                            <h5 className="card-title">Designing work with us</h5>
                            <div className="meta">
                                <li> <span> <FaUserAlt /> Admin</span> </li>
                                <li> <span> <FaCalendar /> 12 Dec 2019</span> </li>
                                <li> <span> <FaTags /> Blog </span> </li>
                            </div>
                            <p className="card-text"> {description}</p>

                            <div className="share-post">
                                <span>Share Post</span>
                                <ul className="share-link">
                                    <li><span><FaFacebookF /></span></li>
                                    <li><span><FaTwitter /></span></li>
                                    <li><span><FaLinkedinIn /></span></li>
                                    <li><span><FaInstagram /></span></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;