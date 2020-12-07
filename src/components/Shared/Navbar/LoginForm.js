import React from 'react';

const LoginForm = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="jhondeo@example.com"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                />
            </div>
            <div className="mb-3  d-flex justify-content-between">
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <span style={{cursor: 'pointer'}}>Forget Password</span>
            </div>

            <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
    );
};

export default LoginForm;