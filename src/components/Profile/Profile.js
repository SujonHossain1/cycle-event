import React, { useState } from 'react';
import Events from './Events';
import Information from './Information';
import ProfileRoutes from './ProfileRoutes';


const Profile = () => {
    const [profileRoute, setProfileRoute] = useState("user-info");

    const profileRouteHanlder = (event) => {
        const { value } = event.target;
        setProfileRoute(value);
    }
    console.log(profileRoute);
    return (
        <div className="container-fluid  px-5 pt-5">
            <div className="row">
                <div className="col-md-3">
                    <ProfileRoutes
                        profileRoute={profileRoute}
                        profileRouteHanlder={profileRouteHanlder}
                    />
                </div>
                <div className="col-md-9">
                    {
                        profileRoute === 'user-info' && <Information />
                    }
                    {
                        profileRoute === 'events' && <Events />
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;