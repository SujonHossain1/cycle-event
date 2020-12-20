import React from 'react';

const FooterSubscribe = () => {
    return (
        <div className="subscribe">
            <h3>Subscribe Newsletter</h3>
            <p>Subscribe to our newsletter and don’t miss anything</p>
            <form >
                <input className="subscribe-input" type="email" name="email" placeholder="Your Email"/>
                <button className="subscribe-btn">Subscribe</button>
            </form>
        </div>
    );
};

export default FooterSubscribe;