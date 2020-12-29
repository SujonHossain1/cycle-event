import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.png';
import UserDropdown from './UserDropdown';
import { FaShoppingCart, HiOutlineShoppingCart } from 'react-icons/hi';
import { useSelector } from 'react-redux';



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

    }, []);

    const cart = useSelector(state => state.shop.cart);
    console.log(cart)

    return (
        <nav className="navbar navbar-expand sticky d-none d-md-block">
            <div className="container">
                <Link to="/" className="navbar-brand mb-0 h1 text-uppercase" href="#">Cycle Events</Link>
                <ul className="navbar-nav ml-auto">
                    {
                        navbarRoutes.map(item => (
                            <li className="nav-item pd" key={item.id}>
                                <NavLink exact to={"/" + item.route} activeClassName="active-link" className="nav-link" >{item.title} </NavLink>
                            </li>
                        ))
                    }
                    <li className="nav-item">
                        <Link className="shop-cart">
                            <HiOutlineShoppingCart />
                            <span className="shop-count"> {cart.length } </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-primary text-white ml-3" data-toggle="modal" data-target="#modal">Register</button>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop" className="btn btn-primary text-white ml-3">Shop</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle pr-0" id="userDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            <img className="avatar" src={avatar} alt="" />
                            <span className="ml-1">Sujon Hossain</span>
                        </span>
                        <UserDropdown />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;