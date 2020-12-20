import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Shared/Footer/Footer';
import Modal from '../Shared/Navbar/Modal';
import Navbar from '../Shared/Navbar/Navbar';
import AboutHome from './AboutHome';
import Carousel from './Carousel';
import sampleComponent from './Gallery';
import Timer from './Timer';


const Home = () => {

    return (
        <>
            <Navbar />
            <Modal/>
            <Carousel />
            <Timer/>
            <AboutHome/>
            <Blog />
            <sampleComponent/>
            <Footer/>
            
        </>
    );
};

export default Home;