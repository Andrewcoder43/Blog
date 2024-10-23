import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from './BlogProvider';

const BlogPage = () => {
    const { blogs, isLoading, error } = useContext(BlogContext);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 4;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const visibleBlogs = blogs.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));
    };

    // Function to strip HTML tags
    const stripHtml = (html) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    // Function to get excerpt
    const getExcerpt = (content, maxLength = 100) => {
        const strippedContent = stripHtml(content);
        if (strippedContent.length <= maxLength) return strippedContent;
        return strippedContent.substr(0, maxLength) + '...';
    };

    return (
        <div className="blog-page">
            <h1 className="blog-header">Blog</h1>
            <div className="underline"></div>
            <div className="blog-thumbnails-container">
                <div className="blog-grid">
                    {visibleBlogs.map((blog) => (
                        <div key={blog.id} className="blog-thumbnail">
                            <img src={blog.image} alt={blog.title} />
                            <h3>{blog.title}</h3>
                            <p className="post-info">
                                <span className="author">{blog.author}</span>
                                <span className="separator"> - </span>
                                <span className="date">{blog.date}</span>
                            </p>
                            <p className="post-excerpt">
                                {getExcerpt(blog.post)}
                            </p>
                            <div className="button-container">
                                <Link
                                    to={`/blog/${blog.id}`}
                                    className="read-more-button"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>
                    <span>
                        {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;