import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link className="navbar-brand mb-0 h1 text-uppercase" href="#">Cycle Events</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-link " >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="active" className="nav-link" >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/schedule" activeClassName="active" className="nav-link" >Schedule</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blogs" activeClassName="active" className="nav-link" >Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="active" className="nav-link" >Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <span className="btn btn-primary text-white ml-1" >Buy Ticket</span>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;