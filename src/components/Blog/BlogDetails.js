import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePost } from '../../store/actions/blogAction';
import moment from 'moment';

const BlogDetails = () => {
    const { id } = useParams();
    const singleBlog = useSelector(state => state.blogs.singleBlog);
    const dispatch = useDispatch();

    const { title, description, creator, image, tags, date } = singleBlog;

    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [dispatch, id]);

    // console.log(singleBlog)
    return (

        <div className="container">

            <div className="row">
                <div className="blog-section-text py-5">
                    <h2 className="title-style">Blog Details</h2>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <img className="card-img-top" src={image} alt="Not found" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <div className="meta">
                                <li> <span> <FaUserAlt />  {creator} </span> </li>
                                <li> <span> <FaCalendar /> {moment(date).fromNow()} </span> </li>
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