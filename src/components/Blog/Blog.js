import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/blog/blog-1.jpg';
import img2 from '../../assets/images/blog/blog-2.jpg';
import img3 from '../../assets/images/blog/blog-3.jpg';

import BlogItem from './BlogItem';
const blogData = [
    {
        id: 'blog-1',
        date: new Date().toLocaleString(),
        by: 'admin',
        comment: [],
        img: img1,
        title: 'Why Lead Generation is Key for Business Growth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ratione neque veritatis nihil, magni praesentium architecto suscipit officiis dolor obcaecati atque reiciendis, provident consectetur minus qui et facilis! Suscipit architecto aspernatur, incidunt maxime placeat, et officiis voluptas quia similique quo, consectetur alias rem. Quibusdam voluptates, eligendi, consequuntur porro illo odio architecto consequatur cum maiores aut impedit voluptas sit pariatur voluptate, dolorem facilis asperiores illum adipisci deserunt velit possimus! Debitis, iste optio, ea molestias nam, facilis veritatis ab veniam porro quisquam similique officia necessitatibus dolore quidem voluptates dolor voluptate fuga ducimus labore. Et eligendi laboriosam aspernatur! Ipsa, ratione quam! Pariatur, mollitia?',
    },
    {
        id: 'blog-2',
        date: new Date().toLocaleString(),
        by: 'admin',
        comment: [],
        img: img2,
        title: 'There are many variations  for Business Growth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ratione neque veritatis nihil, magni praesentium architecto suscipit officiis dolor obcaecati atque reiciendis, provident consectetur minus qui et facilis! Suscipit architecto aspernatur, incidunt maxime placeat, et officiis voluptas quia similique quo, consectetur alias rem. Quibusdam voluptates, eligendi, consequuntur porro illo odio architecto consequatur cum maiores aut impedit voluptas sit pariatur voluptate, dolorem facilis asperiores illum adipisci deserunt velit possimus! Debitis, iste optio, ea molestias nam, facilis veritatis ab veniam porro quisquam similique officia necessitatibus dolore quidem voluptates dolor voluptate fuga ducimus labore. Et eligendi laboriosam aspernatur! Ipsa, ratione quam! Pariatur, mollitia?',
    },
    // {
    //     id: 'blog-3',
    //     date: new Date().toLocaleString(),
    //     by: 'admin',
    //     comment: [],
    //     img: img3,
    //     title: 'Why Lead Generation is Key for Business Growth There are many variations',
    //     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ratione neque veritatis nihil, magni praesentium architecto suscipit officiis dolor obcaecati atque reiciendis, provident consectetur minus qui et facilis! Suscipit architecto aspernatur, incidunt maxime placeat, et officiis voluptas quia similique quo, consectetur alias rem. Quibusdam voluptates, eligendi, consequuntur porro illo odio architecto consequatur cum maiores aut impedit voluptas sit pariatur voluptate, dolorem facilis asperiores illum adipisci deserunt velit possimus! Debitis, iste optio, ea molestias nam, facilis veritatis ab veniam porro quisquam similique officia necessitatibus dolore quidem voluptates dolor voluptate fuga ducimus labore. Et eligendi laboriosam aspernatur! Ipsa, ratione quam! Pariatur, mollitia?',
    // }
]

const Blog = () => {
    return (

        <section id="blog-section">
            <div className="container">
                <h2 className="text-center pb-5">Recent Blog</h2>
                <div className="row">
                    {
                        blogData.map(blog => <BlogItem
                            key={blog.id}
                            blog={blog}
                        />)
                    }
                </div>
                <div className="text-center">
                    <Link to="/blogs" className="btn btn-outline-primary my-3">See All Blogs</Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;