import React from 'react';
import Blog from '../Blog/Blog';
import LoginModal from '../Shared/Navbar/LoginModal';
import Navbar from '../Shared/Navbar/Navbar';
import Carousel from './Carousel';


const Home = () => {

    return (
        <>
            <Navbar />
            <LoginModal/>
            <Carousel />
            <Blog />

            
        </>
    );
};

export default Home;