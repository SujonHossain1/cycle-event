import React from 'react';

const Contact = () => {
    return (
        <section id="contact-section">
        <div class="contact-wrap">
            <div class="contact-title">
                <h1>Contact us</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero fugit, nihil nam nesciunt harum
                    adipisci?</p>
            </div>
            <form>
                <label for="name">Your Name</label>
                <input type="text" name="" id="name" />
                <label for="name">Your Email</label>
                <input type="email" name="" id="name" />
                <label for="name">Your Message</label>
                <textarea name="" id=""/>
                <button style={{marginTop: '10px'}}  class="btn btn-primary" type="submit"> Submit</button>
            </form>
        </div>
    </section>
    );
};

export default Contact;