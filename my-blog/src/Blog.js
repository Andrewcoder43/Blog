import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BlogContext } from './BlogProvider';

const stripHtml = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

const Blog = () => {
    const { blogs, loading, error } = useContext(BlogContext);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const totalPages = Math.ceil(blogs.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    const nextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    return (
        <div className="blog-page">
            <h1 className="blog-header">Blog</h1>
            <div className="underline"></div>
            <div className="blog-thumbnails-container">
                <div className="blog-grid">
                    {currentPosts.map(post => (
                        <div key={post.id} className="blog-thumbnail">
                            <img src={post.image} alt={post.title} />
                            <h3>{post.title}</h3>
                            <p className="post-info">
                                <span className="author">{post.author}</span>
                                <span className="separator"> - </span>
                                <span className="date">{post.date}</span>
                            </p>
                            <p className="post-excerpt">
                                {stripHtml(post.post).substring(0, 100)}...
                            </p>
                            <div className="button-container">
                                <button className="category-button">{post.category}</button>
                                <Link to={`/blog/${post.id}`} className="read-more-button">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button onClick={prevPage} disabled={currentPage === 1}>
                        <FaArrowLeft />
                    </button>
                    <span>{currentPage} of {totalPages}</span>
                    <button onClick={nextPage} disabled={currentPage === totalPages}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;