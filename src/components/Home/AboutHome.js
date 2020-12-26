import React from 'react';
import where from '../../assets/images/icons/call-center-agent.png';
import when from '../../assets/images/icons/study.png';
import aboutImg from '../../assets/images/about1.png';
const AboutHome = () => {
    return (
        <section style={{background: '#f1f1f1'}} className="py-4  my-4">
            <div className="container mb-5 pb-3">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="about-home-content ">
                            <h2 className="pb-3">The Biggest Digital Conference.</h2>
                            <p>There are many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.rere arge many variations ohf passages of sorem gpsum ilable. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam expedita cumque voluptatum officiis. Suscipit eaque, sit eius dolor itaque adipisci porro maiores facere qui perferendis perspiciatis ea dignissimos mollitia debitis!</p>
                            <div className="where-when py-3">
                                <div className="where d-flex">
                                    <img src={where} alt="" />
                                    <div className="ml-3">
                                        <h5 className="mb-0">Where</h5>
                                        <span>Dhaka, Bangladesh</span>
                                    </div>
                                </div>
                                <div className="when d-flex">
                                    <img src={when} alt="" />
                                    <div className="ml-3">
                                        <h5 className="mb-0">When</h5>
                                        <span>Tuesday, December 8, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary mt-4 py-2">Get Your Ticket</button>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="text-center pt-5">
                            <img src={aboutImg} alt="" className="img-fluid " />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHome;