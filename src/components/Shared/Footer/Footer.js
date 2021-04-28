import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../assets/images/facebook.png';
import android from '../../../assets/images/icons/android.png';
import apple from '../../../assets/images/icons/apple.png';
import linkedin from '../../../assets/images/linkedin.png';
import google from '../../../assets/images/search.png';
import twitter from '../../../assets/images/twitter.png';
import { aboutUs, customerService, pages, social } from './FooterData';
import FooterSubscribe from './FooterSubscribe';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <FooterSubscribe />
                <div className="row">
                    <div className="col-md-3 pt-4">
                        <div className="footer-section-item">
                            <h4>Customer Services</h4>
                            <div className="footer-link">
                                {customerService.map((item) => (
                                    <Link to={item.route} key={item.id}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 pt-4">
                        <div className="footer-section-item">
                            <h4>Pages</h4>
                            <div className="footer-link">
                                {pages.map((item) => (
                                    <Link to={item.route} key={item.id}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 pt-4">
                        <div className="footer-section-item">
                            <h4>About Us</h4>
                            <div className="footer-link">
                                {aboutUs.map((item) => (
                                    <Link to={item.route} key={item.id}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 pt-4">
                        <div className="footer-section-item">
                            <h4>Social Media</h4>
                            <div className="footer-link">
                                {social.map((item) => (
                                    <Link to={item.route} key={item.id}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <hr
                    style={{
                        height: '1px',
                        backgroundColor: '#000',
                        marginTop: '40px',
                        marginBottom: '20px',
                    }}
                />
                <div className="row">
                    <div className="col-md-4">
                        <div className="download text-center">
                            <span>Download:</span>
                            <div className="apple  mx-2">
                                <img src={apple} alt="" />
                                <div>
                                    <small>Available on the</small>
                                    <br />
                                    <strong>App Store</strong>
                                </div>
                            </div>
                            <div className="android">
                                <img src={android} alt="" />
                                <div>
                                    <small>Available on the</small> <br />
                                    <strong>App Store</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center ml-auto">
                        <div className="follow">
                            <div className="social-icons">
                                <p className="mt-1">Follow:</p>
                                <img src={facebook} alt="" />
                                <img src={google} alt="" />
                                <img src={twitter} alt="" />
                                <img src={linkedin} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-4">
                    Copyright &copy; {new Date().getFullYear()}, Developed by
                    Sujon Hossain
                </p>
            </div>
        </div>
    );
};

export default Footer;
