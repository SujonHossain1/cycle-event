import React from 'react';
import user from '../../assets/images/user.jpg';

const Information = () => {
    return (
        <div>
            <div className="profile">
                <img className="profile-picture" src={user} alt="" />
                <h3>Sara Tancried</h3>
                <p>New York, USA</p>
            </div>
            <form className="px-5 my-5">
                <div className="form-row row">
                    <div className="form-group pb-3 col-md-6">
                        <label className="pb-1" htmlFor="inputEmail4">Full Name</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Full Name" />
                    </div>
                    <div className="form-group pb-3 col-md-6">
                        <label className="pb-1" htmlFor="inputPassword4">Username</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Username" />
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
                        <label className="pb-1" htmlFor="inputAddress">Password</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Password" />
                    </div>
                    <div className="form-group pb-3 col-md-6">
                        <label className="pb-1" htmlFor="inputPassword4">Confirm Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Confirm Password" />
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
                    <button type="submit" className="btn mt-3 btn-primary px-5">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default Information;