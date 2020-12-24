import React from 'react';

const EventForm = () => {
    return (
        <form className="p-5 shadow-sm">
            <div className="form-row row">
                <div className="form-group pb-3 col-md-6">
                    <label className="pb-1" for="inputEmail4">Full Name</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Full Name" />
                </div>
                <div className="form-group pb-3 col-md-6">
                    <label className="pb-1" for="inputPassword4">Username</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Username" />
                </div>
            </div>
            <div className="form-row row">
                <div className="form-group pb-3 col-md-6">
                    <label className="pb-1" for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group pb-3 col-md-6">
                    <label className="pb-1" for="inputPassword4">Phone</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="+88 017++++++" />
                </div>
            </div>
            <div className="form-row row">
                <div className="form-group pb-3 col-md-6">
                    <label className="pb-1" for="inputAddress">Password</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Password" />
                </div>
                <div className="form-group pb-3 col-md-6">
                    <label className="pb-1" for="inputPassword4">Confirm Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Confirm Password" />
                </div>
            </div>


            <div className="form-row row">
                <div className="form-group pb-3 col-md-6">
                    <label className="pb-1" for="inputCity">Street</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="1234 Main St" />
                </div>
                <div className="form-group pb-3 col-md-4">
                    <label className="pb-1" for="inputState">City</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group pb-3 col-md-2">
                    <label className="pb-1" for="inputZip">Zip</label>
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