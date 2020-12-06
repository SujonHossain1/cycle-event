import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.png';
import UserDropdown from './UserDropdown';



const navbarRoutes = [
    {
        id: 1,
        title: 'Home',
        route: ''
    },
    {
        id: 2,
        title: 'About',
        route: 'about'
    },
    {
        id: 3,
        title: 'Schedule',
        route: 'schedule'
    },
    {
        id: 4,
        title: 'Blogs',
        route: 'blogs'
    },
    {
        id: 5,
        title: 'Contact',
        route: 'contact'
    },
]

const Navbar = () => {
    useEffect(() => {
        const nav = document.querySelector('.navbar');

        function fixNav() {
            if (window.scrollY >= 150) {
                nav.classList.add('animate__fadeInDown', 'fixed');

            } else {
                nav.classList.remove('animate__fadeInDown', 'fixed');

            }
        }

        window.addEventListener('scroll', fixNav);

    }, [window.scrollY]);
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light ">
            <div className="container">
                <Link className="navbar-brand mb-0 h1 text-uppercase" href="#">Cycle Events</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {
                            navbarRoutes.map(item => (
                                <li className="nav-item " key={item.id}>
                                    <NavLink exact to={"/" + item.route} activeClassName="active" className="nav-link" >{item.title} </NavLink>
                                </li>
                            ))
                        }
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary text-white ml-3" data-toggle="modal" data-target="#modal">Register</button>
                        </li>
                        <li class="nav-item dropdown">
                            <span style={{ marginRight: '-20px' }} class="nav-link dropdown-toggle pr-0" id="userDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                <img class="avatar" src={avatar} alt="" />
                                <span className="ml-1">Sujon Hossain</span>
                            </span>
                            <UserDropdown />
                        </li>
                    </ul>

                </div>


            </div>
        </nav>
    );
};

export default Navbar;