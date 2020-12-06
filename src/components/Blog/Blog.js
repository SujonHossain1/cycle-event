import React from 'react';
import img1 from '../../assets/images/blog/blog-1.jpg';
import img2 from '../../assets/images/blog/blog-2.jpg';
import img3 from '../../assets/images/blog/blog-3.jpg';

const Blog = () => {
    return (

        <section id="blog-section">
            <div class="container">

                <div class="row">

                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
                        <div class="blog-item ">
                            <div class="blog-img">
                                <a href="blog.html">
                                    <img class="img-fluid" src={img1} alt="" />
                                </a>
                            </div>
                            <div class="blog-txt">
                                <p>11 March 2019 <span> By Naiem Aziz</span></p>
                                <a href="blog.html">
                                    <h5>There are many variations</h5>
                                </a>
                                <p>Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis
                                    fames. Lobortis ultricies.</p>
                                <a class="blog-btn" href="blog.html">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 pb-5 ">
                        <div class="blog-item ">
                            <div class="blog-img">
                                <a href="blog.html">
                                    <img class="img-fluid" src={img2} alt="" />
                                </a>
                            </div>
                            <div class="blog-txt">
                                <p>11 March 2019 <span> By Mahadi Hasan</span></p>
                                <a href="blog.html">
                                    <h5>There are many variations</h5>
                                </a>
                                <p>Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis
                                    fames. Lobortis ultricies.</p>
                                <a class="blog-btn" href="blog.html">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
                        <div class="blog-item">
                            <div class="blog-img">
                                <a href="blog.html">
                                    <img class="img-fluid" src={img3} alt="" />
                                </a>
                            </div>
                            <div class="blog-txt">
                                <p>11 March 2019 <span> By Masud Rana</span></p>
                                <a href="blog.html">
                                    <h5>There are many variations</h5>
                                </a>

                                <p>Consectetur dolorem ipsum quia dolor sit amet, adipisci velit, sed quia non numquam eius
                                    modi tempora.</p>
                                <a class="blog-btn" href="blog.html">Read More</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Blog;