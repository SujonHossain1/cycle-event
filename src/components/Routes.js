import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BlogsBackend from './backend/Blogs/BlogsBackend';
import Blog from './Blog/Blog';
import BlogDetails from './Blog/BlogDetails';
import Contact from './Contact/Contact';
import EventDetails from './Events/EventDetails';
import Home from './Home/Home';
import Leader from './Leader/Leader';
import Profile from './Profile/Profile';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/"> <Home /> <Footer /> </Route>
            <Route path="/profile"> <Profile /> </Route>
            <Route exact path="/blogs"> <Blog /> </Route>
            <Route path="/blogs/:id"> <BlogDetails /> </Route>
            <Route path="/register"> <EventDetails /> </Route>
            <Route path="/contact"> <Contact /> </Route>
            <Route path="/schedule"> <Leader /> </Route>

            {/* ============== Backend Routes ============= */}
            <Route path="/backend/blogs"> <BlogsBackend/> </Route>
        </Switch>
    );
};

export default Routes;