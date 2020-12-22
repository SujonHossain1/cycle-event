import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import calender from '../../assets/images/icons/calendar.png';
const Timer = ({ event }) => {
    const { name, day, date, route, conference } = event;
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');


    let interval = useRef();



    const startTimer = (date) => {
        const countdownDate = new Date(date).getTime() || 0;

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const getDays = Math.floor(distance / (1000 * 60 * 60 * 24));
            const getHours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const getMinutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const getSeconds = Math.floor(distance % (1000 * 60) / 1000);


            if (distance < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                setDays(getDays);
                setHours(getHours);
                setMinutes(getMinutes);
                setSeconds(getSeconds);
            }

        }, 1000);

    }

    startTimer(date)


    return (
        <div className="col-md-6 mt-3">
            <div className="timer-section shadow-sm">
                <h1 className="pl-3" style={{ fontSize: '40px' }}>{conference}</h1>
                <p className="pl-3"> <img src={calender} alt="" /> {day} - {name}</p>
                <div className="timer">
                    <div className="time px-3">
                        <h3> {days} </h3>
                        <p>Days</p>
                    </div>
                    <div className="time px-3">
                        <h3>{hours}</h3>
                        <p>Hours</p>
                    </div>
                    <div className="time px-3">
                        <h3> {minutes} </h3>
                        <p>Minutes</p>
                    </div>
                    <div className="time px-3">
                        <h3> {seconds} </h3>
                        <p>Seconds</p>
                    </div>
                </div>
                <Link to={'/register/' + route} className="btn ml-3 mt-3 btn-primary">Register Now</Link>
            </div>
        </div>
    );
};

export default Timer;