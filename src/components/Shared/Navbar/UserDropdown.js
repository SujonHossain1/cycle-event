import React from 'react';
import { Link } from 'react-router-dom';

const UserDropdown = () => {
    return (
        <ul className="dropdown-menu dropdown-menu-style" aria-labelledby="userDropdown">
            <div className="text-center ">
                <Link to="/profile" className="btn w-100 btn-secondary">Profile</Link>
                <br/>
                <button className="btn mt-2 w-100 btn-danger">Logout</button>
            </div>
        </ul>
    );
};

export default UserDropdown;