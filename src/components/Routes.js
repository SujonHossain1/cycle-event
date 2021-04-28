import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BlogsBackend from './backend/Blogs/BlogsBackend';
import Blog from './Blog/Blog';
import BlogDetails from './Blog/BlogDetails';
import Contact from './Contact/Contact';
import EventDetails from './Events/EventDetails';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Footer from './Shared/Footer/Footer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
                <Footer />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route exact path="/blogs">
                <Blog />
            </Route>
            <Route path="/blogs/:id">
                <BlogDetails />
            </Route>
            <Route path="/register">
                <EventDetails />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>

            {/* ============== Backend Routes ============= */}
            <Route exact path="/backend/blogs">
                <BlogsBackend />
            </Route>
        </Switch>
    );
};

export default Routes;
