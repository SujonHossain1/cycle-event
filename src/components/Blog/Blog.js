import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/blog/blog-1.jpg';
import img2 from '../../assets/images/blog/blog-2.jpg';
import img3 from '../../assets/images/blog/blog-3.jpg';
import comment from '../../assets/images/icons/comment.png';
const Blog = () => {
    return (

        <section id="blog-section">
            <div className="container">
                <h2 className="text-center pb-5">Recent Blog</h2>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 pb-5">
                        <div className="blog-item ">
                            <div className="blog-img">
                                <a href="blog.html">
                                    <img className="img-fluid" src={img1} alt="" />
                                </a>
                            </div>
                            <div className="blog-txt">
                                <p className="admin">July. 14, 2019 Admin   <img className="ml-2" src={comment} alt=""/> <span>  3 </span> </p>
                                <a href="blog.html">
                                    <h4>There are many variations</h4>
                                </a>
                                <p>Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis
                                    fames. Lobortis ultricies.</p>
                                <a className="blog-btn" href="blog.html">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 pb-5 ">
                        <div className="blog-item ">
                            <div className="blog-img">
                                <a href="blog.html">
                                    <img className="img-fluid" src={img2} alt="" />
                                </a>
                            </div>
                            <div className="blog-txt">
                                <p>11 March 2019 <span> By Mahadi Hasan</span></p>
                                <a href="blog.html">
                                    <h4>There are many variations</h4>
                                </a>
                                <p>Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis
                                    fames. Lobortis ultricies.</p>
                                <a className="blog-btn" href="blog.html">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
                        <div className="blog-item">
                            <div className="blog-img">
                                <a href="blog.html">
                                    <img className="img-fluid" src={img3} alt="" />
                                </a>
                            </div>
                            <div className="blog-txt">
                                <p>11 March 2019 <span> By Masud Rana</span></p>
                                <a href="blog.html">
                                    <h4>There are many variations</h4>
                                </a>

                                <p>Consectetur dolorem ipsum quia dolor sit amet, adipisci velit, sed quia non numquam eius
                                    modi tempora.</p>
                                <a className="blog-btn" href="blog.html">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link to="/blogs" className="btn btn-outline-primary my-3">See All Blogs</Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;