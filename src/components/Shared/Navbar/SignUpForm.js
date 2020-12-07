import React from 'react';

const SignUpForm = () => {
    return (
        <form>
            
             <div className="mb-3">
                <label htmlFor="email" className="form-label">Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    placeholder="Jhon Deo"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="jhondeo@example.com"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Confirm Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                />
            </div>
            

            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
    );
};

export default SignUpForm;