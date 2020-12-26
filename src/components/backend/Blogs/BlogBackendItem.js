import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBlogPost } from '../../../store/actions/blogAction';


const BlogsBackendItem = ({ post, setCurrentId }) => {
    const { _id, title, image, description } = post;
    const dispatch = useDispatch();
    const [updateId, setUpdatedId] = useState(_id);
    
    const deletePost = () => {
        dispatch(deleteBlogPost(_id));
    };
    const updatePost = () => {
        setUpdatedId(_id);
        setCurrentId(updateId);
    }

    return (
        <div className="col-md-12 my-3">
            <div className="card" style={{ width: 'width: 18rem' }}>
                <img className="card-img-top" src={image} alt="Not found" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> {description}</p>
                    <div className="d-flex">
                        <a href="#form-id" onClick={updatePost} className="btn btn-primary btn-sm mr-3">Edit Post</a>
                        <button onClick={deletePost} className="btn btn-danger btn-sm">Delete Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsBackendItem;