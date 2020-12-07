import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Shared/Footer/Footer';
import Modal from '../Shared/Navbar/Modal';
import Navbar from '../Shared/Navbar/Navbar';
import Carousel from './Carousel';


const Home = () => {

    return (
        <>
            <Navbar />
            <Modal/>
            <Carousel />
            <Blog />
            <Footer/>
            
        </>
    );
};

export default Home;