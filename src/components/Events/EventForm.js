import React from 'react';

const EventForm = () => {
    return (
        <form className=" col-md-8 pb-3 mx-auto">
            <div className="blog-section-text mb-4">
                <h2 className="title-style">Register Now</h2>
            </div>
            <div className="form-row row">
                <div className="form-group pb-3 col-md-6">
                    <label className="pb-1" htmlFor="inputEmail4">First Name</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Full Name" />
                </div>
                <div className="form-group pb-3 col-md-6">
                    <label className="pb-1" htmlFor="inputPassword4">Last Name</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Last Name" />
                </div>
            </div>
            <div className="form-row row">
                <div className="form-group pb-3 col-md-6">
                    <label className="pb-1" htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group pb-3 col-md-6">
                    <label className="pb-1" htmlFor="inputPassword4">Phone</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="+88 017++++++" />
                </div>
            </div>

            <div className="form-row row">
                <div className="form-group pb-3 col-md-6">
                    <label className="pb-1" htmlFor="inputCity">Street</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="1234 Main St" />
                </div>
                <div className="form-group pb-3 col-md-4">
                    <label className="pb-1" htmlFor="inputState">City</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group pb-3 col-md-2">
                    <label className="pb-1" htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
            </div>

            <div className="text-center">
                <button type="submit" className="btn mt-3 btn-primary px-5">Submit</button>
            </div>
        </form>
    );
};

export default EventForm;