import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../store/actions/blogAction';
import AboutHome from './AboutHome';
import Carousel from './Carousel';
import LeaderBoard from './LeaderBoard';
import LeaderCarousel from './LeaderCarousel';
import Timer from './Timer';
import moment from 'moment';
import commentImg from '../../assets/images/icons/comment.png';

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
    const blogs = useSelector(state => state.blogs.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);


    return (
        <>
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
                        <div className="blog-section-text pt-4 pb-2">
                            <h4 className="title-style">Reacts Post</h4>
                        </div>
                        <div className="row">
                            {
                                blogs.slice(0, 2).map(blog => (

                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 pt-5">
                                        <div className="blog-item ">
                                            <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none' }}>
                                                <div className="blog-img">
                                                    <img className="img-fluid" src={blog.image} alt="" />
                                                </div>
                                                <div className="blog-txt">
                                                    <p className="admin"> {moment(blog.date).fromNow()} {blog.by}   <img className="ml-2" src={commentImg} alt="" /> <span> 0 </span> </p>
                                                    <h4> {blog.title.substr(0, 80)} </h4>
                                                    <p> {blog.description?.substr(0, 150) + "..."} </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                        <div className="text-center mt-5">
                            <Link to="/blogs" className="btn btn-outline-primary"> See All Blogs </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <LeaderBoard />
                    </div>
                </div>
            </div>
            <AboutHome />
            <LeaderCarousel />
        </>
    );
};

export default Home;