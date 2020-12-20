import React from 'react';
import useForm from './useForm';
import validate from './validate';

const Register = () => {
    const { values, errors, inputHandler, submitHandler } = useForm(submit, validate);
    const { fullName, email, password } = values;

    function submit() {
        console.log('submited values', values);
    }

    return (
        <form onSubmit={submitHandler} noValidate>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    onBlur={inputHandler}
                    defaultValue={values.fullName}
                    placeholder="Jhon Deo"
                />
                {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    onBlur={inputHandler}
                    defaultValue={values.email}
                    placeholder="jhondeo@example.com"
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    onBlur={inputHandler}
                    defaultValue={values.password}
                    name="password"
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Confirm Password</label>
                <input
                    type="password"
                    className="form-control"
                    onBlur={inputHandler}
                    defaultValue={values.confirmPassword}
                    name="confirmPassword"
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>


            <button
                type="submit"
                className={fullName && email && password ?
                    'btn btn-primary w-100' :
                    'btn btn-primary disabled w-100'
                }>
                Sign Up
            </button>
        </form>
    );
};

export default Register;