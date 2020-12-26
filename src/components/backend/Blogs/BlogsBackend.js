import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../../store/actions/blogAction';
import BlogForm from './BlogForm';
import BlogsBackendItem from './BlogBackendItem';


const BlogsBackend = () => {
    const [currentId, setCurrentId] = useState(null);
    const blogs = useSelector(state => state.blogs.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);


    // console.log("Post Data from Post page", blogs);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {
                        blogs.map((post) => <BlogsBackendItem
                            key={post._id}
                            post={post}
                            setCurrentId={setCurrentId}
                        />)
                    }
                </div>
                <div className="col-md-4">
                    <BlogForm
                        currentId={currentId}
                        setCurrentId={setCurrentId}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogsBackend;