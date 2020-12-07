import React from 'react';

const FooterSubscribe = () => {
    return (
        <div className="subscribe">
            <p>Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</p>
            <form >
                <input className="subscribe-input" type="email" name="email" placeholder="Your Email"/>
                <button className="subscribe-btn">Subscribe</button>
            </form>
        </div>
    );
};

export default FooterSubscribe;