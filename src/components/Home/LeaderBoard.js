import React from 'react';
import user from '../../assets/images/user.jpg'

const LeaderBoard = () => {
    return (
        <div className="shadow-sm mt-4">
            <div className="leader-item">
                <img className="" src={user} alt="" />
                <div className="ml-3">
                    <h4>Sujon Hossain</h4>
                    <span>Rank: 1</span>
                </div>
            </div>
            <div className="leader-item">
                <img className="" src={user} alt="" />
                <div className="ml-3">
                    <h4>Sujon Hossain</h4>
                    <span>Rank: 1</span>
                </div>
            </div>
            <div className="leader-item">
                <img className="" src={user} alt="" />
                <div className="ml-3">
                    <h4>Sujon Hossain</h4>
                    <span>Rank: 1</span>
                </div>
            </div>
            <div className="leader-item">
                <img className="" src={user} alt="" />
                <div className="ml-3">
                    <h4>Sujon Hossain</h4>
                    <span>Rank: 1</span>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoard;