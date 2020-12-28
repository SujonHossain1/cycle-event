import React from 'react';
import { Link } from 'react-router-dom';

const RecentBlog = ({ blog }) => {
    const {_id,  image, title, description } = blog;

    return (
        <div className="border shadow-sm p-2 rounded recent-post mb-3">
            <Link to={`/blogs/${_id}`}>
                <img className="img-fluid rounded" src={image} alt="" />
                <strong > <span to="" className="mt-2 d-block text-decoration-none"> {title} </span> </strong>
                <hr style={{ marginTop: '-1px' }} />
                <span className="description"> {description?.substr(0, 50) + "..."} </span>
            </Link>
        </div>
    );
};

export default RecentBlog;