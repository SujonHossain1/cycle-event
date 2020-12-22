import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Navbar from './Shared/Navbar/Navbar';

const Routes = () => {
    return (
       <Switch>
           <Route exact path="/">
               <Home/>
           </Route>
           <Route path="/profile">
               <Navbar/>
               <Profile/>
           </Route>
       </Switch>
    );
};

export default Routes;