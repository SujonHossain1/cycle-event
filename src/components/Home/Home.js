import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Shared/Footer/Footer';
import Modal from '../Shared/Navbar/Modal';
import Navbar from '../Shared/Navbar/Navbar';
import AboutHome from './AboutHome';
import Carousel from './Carousel';
import LeaderBoard from './LeaderBoard';
import Timer from './Timer';

const events = [
    {
        id: 1,
        name: 'Los Angeles CA',
        day: '20-23 January 2021',
        date: 'Jan 20 2021 10:00:00',
        conference: 'CONFERENCE 2021',
        route: 'dhaka-cycle-event'
    },
    {
        id: 2,
        name: 'Mirpur Stadium, Dhaka',
        day: '31 December 2020',
        conference: 'CONFERENCE 2020',
        date: 'Dec 31 2020 11:05:00',
        route: 'dhaka-cycle-event'
    }
]

const Home = () => {


    return (
        <>
            <Navbar />
            <Modal />
            <Carousel />
            <div className="container">
                <div className="row">
                    {
                        events.map(event => <Timer
                            key={event.id}
                            event={event}
                        />)
                    }
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Blog />
                    </div>
                    <div className="col-md-4">
                        <LeaderBoard/>
                    </div>
                </div>
            </div>
            <AboutHome />
            <Footer />

        </>
    );
};

export default Home;