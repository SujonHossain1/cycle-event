import React from 'react';
import { AiOutlineCalendar, AiOutlineHeart, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

const ProfileRoutes = ({profileRoute, profileRouteHanlder}) => {
    return (
        <div className="profile-menu">
            <h3 className="mb-4">User Profile</h3>
            <div className={profileRoute === 'user-info' ? 'profile-menu-item profile-active' : 'profile-menu-item'}>
                <label htmlFor="user-info">
                    <span className="profile-icon"> <AiOutlineUser /> </span>
                    <strong className="profile-route">Information</strong>
                </label>
                <input
                    type="radio"
                    id="user-info"
                    value="user-info"
                    checked={profileRoute === 'user-info'}
                    onChange={profileRouteHanlder}
                />
            </div>
            <div className={profileRoute === 'events' ? 'profile-menu-item profile-active' : 'profile-menu-item'}>
                <label htmlFor="events">
                    <span className="profile-icon"> <AiOutlineCalendar /> </span>
                    <strong className="profile-route">Events</strong>
                </label>
                <input
                    type="radio"
                    id="events"
                    value="events"
                    checked={profileRoute === 'events'}
                    onChange={profileRouteHanlder}
                />
            </div>
            <div className={profileRoute === 'favorites' ? 'profile-menu-item profile-active' : 'profile-menu-item'}>
                <label htmlFor="favorites">
                    <span className="profile-icon"> <AiOutlineHeart /> </span>
                    <strong className="profile-route">Favorites</strong>
                </label>
                <input
                    type="radio"
                    id="favorites"
                    value="favorites"
                    checked={profileRoute === 'favorites'}
                    onChange={profileRouteHanlder}
                />
            </div>
            <div className={profileRoute === 'watch-list' ? 'profile-menu-item profile-active' : 'profile-menu-item'}>
                <label htmlFor="watch-list">
                    <span className="profile-icon"> <AiOutlineStar /> </span>
                    <strong className="profile-route">Watch List</strong>
                </label>
                <input
                    type="radio"
                    id="watch-list"
                    value="watch-list"
                    checked={profileRoute === 'watch-list'}
                    onChange={profileRouteHanlder}
                />
            </div>
            <div className={profileRoute === 'notifications' ? 'profile-menu-item profile-active' : 'profile-menu-item'}>
                <label htmlFor="notifications">
                    <span className="profile-icon"> <IoMdNotificationsOutline /> </span>
                    <strong className="profile-route">Notifications</strong>
                </label>
                <input
                    type="radio"
                    id="notifications"
                    value="notifications"
                    checked={profileRoute === 'notifications'}
                    onChange={profileRouteHanlder}
                />
            </div>
        </div>
    );
};

export default ProfileRoutes;