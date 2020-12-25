import React from 'react';

const Contact = () => {
    return (
        <section id="contact-section">
        <div className="contact-wrap">
            <div className="contact-title">
                <h1>Contact us</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero fugit, nihil nam nesciunt harum
                    adipisci?</p>
            </div>
            <form>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="" id="name" />
                <label htmlFor="name">Your Email</label>
                <input type="email" name="" id="name" />
                <label htmlFor="name">Your Message</label>
                <textarea name="" id=""/>
                <button style={{marginTop: '10px'}}  className="btn btn-primary" type="submit"> Submit</button>
            </form>
        </div>
    </section>
    );
};

export default Contact;