import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import commentImg from '../../assets/images/icons/comment.png';
import { fetchPosts } from '../../store/actions/blogAction';
import AboutHome from './AboutHome';
import Carousel from './Carousel';
import Gallery from './Gallery';
import Timer from './Timer';

const events = [
    {
        id: 1,
        name: 'Los Angeles CA',
        day: '20-23 January 2021',
        date: 'Jan 20 2021 10:00:00',
        conference: 'CONFERENCE 2021',
        route: 'dhaka-cycle-event',
    },
    {
        id: 2,
        name: 'Mirpur Stadium, Dhaka',
        day: '31 December 2020',
        conference: 'CONFERENCE 2020',
        date: 'Jan 1 2021 11:05:00',
        route: 'dhaka-cycle-event',
    },
];

const Home = () => {
    const blogs = useSelector((state) => state.blogs.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <>
            <Carousel />
            <div className="container">
                <div className="row">
                    {events.map((event) => (
                        <Timer key={event.id} event={event} />
                    ))}
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {blogs.slice(0, 2).map((blog) => (
                        <div className="col-6 col-sm-3 col-md-3 col-lg-3 pt-5">
                            <div className="blog-item ">
                                <Link
                                    to={`/blogs/${blog._id}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className="blog-img">
                                        <img
                                            className="img-fluid"
                                            src={blog.image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="blog-txt">
                                        <p className="admin">
                                            {moment(blog.date).fromNow()}
                                            {blog.by}
                                            <img
                                                className="ml-2"
                                                src={commentImg}
                                                alt=""
                                            />
                                            <span> 0 </span>
                                        </p>
                                        <h4>{blog.title.substr(0, 80)}</h4>
                                        <p>
                                            {blog.description?.substr(0, 150) +
                                                '...'}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <AboutHome />
            <Gallery />
        </>
    );
};

export default Home;
