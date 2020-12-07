import React from 'react';
import calender from '../../assets/images/icons/calendar.png';
const Timer = () => {
    return (
        <div className="container">
            <div className="timer-section">
                <h1 className="pl-3" style={{ fontSize: '40px' }}>CONFERENCE 2021</h1>
                <p className="pl-3"> <img src={calender} alt="" /> 20-23 January 2021 - Los Angeles CA</p>
                <div className="timer">
                    <div className="time px-3">
                        <h3>76</h3>
                        <p>Days</p>
                    </div>
                    <div className="time px-3">
                        <h3>11</h3>
                        <p>Hours</p>
                    </div>
                    <div className="time px-3">
                        <h3>55</h3>
                        <p>Minutes</p>
                    </div>
                    <div className="time px-3">
                        <h3>22</h3>
                        <p>Seconds</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;