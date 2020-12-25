import React from 'react';
import { Link } from 'react-router-dom';

const BlogsBackendItem = ({ post }) => {
    const {title, image, description} = post;
    return (
        <div className="col-md-12 my-3">
        <div className="card" style={{ width: 'width: 18rem' }}>
            <img className="card-img-top" src={image} alt="Not found" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"> {description}</p>
                <Link to="" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    </div>
    );
};

export default BlogsBackendItem;