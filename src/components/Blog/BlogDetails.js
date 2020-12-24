import React from 'react';
import img1 from '../../assets/images/blog/blog-1.jpg'
import { FaCalendar, FaFacebookF, FaInstagram, FaLinkedinIn, FaTags, FaTwitter, FaUserAlt } from 'react-icons/fa';
const BlogDetails = () => {
    return (
        <section class="blogs">
            <div class="container">
                <div class="row">
                    <div class="col-12 pt-5">
                        <div class="blog-section-text">
                            <h2 class="title-style">Blog Details</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="posts">
                            <div class="post">
                                <div class="post-img">
                                    <img class="img-fluid" src={img1} alt="" />
                                </div>
                                <div class="content">
                                    <div class="post-mega">
                                        <div class="post-title">
                                            <h4> Designing work with us</h4>
                                        </div>
                                        <ul class="meta">
                                            <li> <span> <FaUserAlt /> Admin</span> </li>
                                            <li> <span> <FaCalendar /> 12 Dec 2019</span> </li>
                                            <li> <span> <FaTags /> Blog </span> </li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, distinctio
                                        officia. Maxime, distinctio pariatur unde accusamus inventore, quaerat sequi
                                        nam
                                        reprehenderit ab saepe est praesentium animi debitis repellat facilis
                                        officiis
                                        voluptas, optio illo. Quia dolore numquam, accusamus enim, voluptate, atque
                                        eaque doloribus magni minus voluptatem quidem et distinctio nam consequatur
                                        blanditiis? Eos eligendi cupiditate, reprehenderit maiores voluptates
                                        obcaecati
                                        sed neque iusto tempora deleniti, esse saepe similique optio odio nulla ipsa
                                        ducimus? Accusamus quod aut nulla, nesciunt eum voluptatum nam a ratione
                                        sunt
                                        perferendis dolore asperiores ad rem, aperiam aliquid cumque assumenda, quam
                                        esse itaque ab? Nihil necessitatibus dignissimos autem possimus esse veniam
                                        maiores officia soluta eius, quaerat quod magnam, neque voluptates dolorem
                                        voluptatibus nostrum. Rem, corporis magni, eum ullam a deleniti consequuntur
                                        laudantium explicabo nihil accusantium voluptates nostrum minus distinctio
                                        dolorum dicta corrupti est libero officiis blanditiis ut aperiam cum
                                        voluptatem.
                                        Amet vero accusantium officia dolore commodi quia vel consectetur rerum sit
                                        corporis doloremque pariatur, minima impedit asperiores, soluta recusandae!
                                        Dignissimos libero fugiat ratione dolorem debitis, sit perspiciatis dolores
                                        totam nemo fuga repellendus magni aut explicabo perferendis ducimus quod
                                        error
                                        iusto, asperiores adipisci. Sint dolor dolores magnam aliquid saepe? Odit
                                        facere
                                        repellendus corporis hic corrupti fugiat exercitationem iste eveniet
                                        dignissimos?</p>
                                    </div>
                                    <div class="share-post">
                                        <span>Share Post</span>
                                        <ul class="share-link">
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
            </div>
        </section>
    );
};

export default BlogDetails;