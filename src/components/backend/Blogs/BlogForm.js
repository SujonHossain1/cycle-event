import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseFile from 'react-file-base64';
import { addPost, getSinglePost, updateBlogPost } from '../../../store/actions/blogAction';

const BlogForm = ({ currentId }) => {
    const [values, setValues] = useState({ image: '', tags: '' });
    const singleBlog = useSelector(state => state.blogs.singleBlog)
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentId) {
            dispatch(getSinglePost(currentId))
        }
    }, [currentId, dispatch]);

    useEffect(() => {
        setValues(singleBlog)
    }, [singleBlog]);




    const inputHandler = (event) => {
        const { name, value } = event.target;
        setValues((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    };



    const submitHandler = (event) => {
        event.preventDefault();

        if (currentId) {
            dispatch(updateBlogPost(currentId, values))
        } else {
            dispatch(addPost(values));
        }

        // clear data 
        setValues({});

    }

    return (
        <form onSubmit={submitHandler} className="p-3 border shadow-sm mt-5" id="form-id">
            <div className="form-group">
                <label htmlFor="creator" >Creator</label>
                <input
                    type="text"
                    id="creator"
                    name="creator"
                    onChange={inputHandler}
                    defaultValue={values.creator}
                    className="form-control"
                    placeholder="Creator"
                />
            </div>
            <div className="form-group">
                <label htmlFor="title" >Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={inputHandler}
                    defaultValue={values.title}
                    className="form-control"
                    placeholder="Title"
                />
            </div>
            <div className="form-group">
                <label htmlFor="tags" >Tags</label>
                <input
                    type="text"
                    id="tags"
                    name="tags"
                    onChange={inputHandler}
                    defaultValue={values.tags}
                    className="form-control"
                    placeholder="Tags split with comma"
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    type="text"
                    id="description"
                    name="description"
                    onChange={inputHandler}
                    defaultValue={values.description}
                    className="form-control"
                    placeholder="Description"
                />
            </div>
            <div className="form-group my-2">
                <BaseFile
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setValues({ ...values, image: base64 })}
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Post</button>
        </form>
    );
};

export default BlogForm;