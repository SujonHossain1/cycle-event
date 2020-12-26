import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/actions/blogAction';
import BlogItem from './BlogItem';



const Blog = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs.blogs);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <section id="blog-section">
            <div className="container">
                <div className="blog-section-text">
                    <h2 className="title-style">Blogs</h2>
                </div>
                <div className="row pt-5">
                    {
                        blogs.map(blog => <BlogItem
                            key={blog._id}
                            blog={blog}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;