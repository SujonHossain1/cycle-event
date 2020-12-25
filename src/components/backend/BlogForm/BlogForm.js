import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import BaseFile from 'react-file-base64';
import { addPost } from '../../../store/actions/blogAction';

const BlogForm = () => {
    const [values, setValues] = useState({ image: '', tags: ' ' });
    const dispatch = useDispatch();

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setValues((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    };

    let { tags } = values;

    const submitHandler = (event) => {

        event.preventDefault();
        tags = tags ? tags.split(' ') : [];

        dispatch(addPost(values));
        console.log(values);


    }

    return (
        <form onSubmit={submitHandler} className="p-3 border shadow-sm mt-5">
            <div className="form-group">
                <label htmlFor="title" >Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={inputHandler}
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
                    className="form-control"
                    placeholder="Tags splite with blank space"
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    type="text"
                    id="description"
                    name="description"
                    onChange={inputHandler}
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