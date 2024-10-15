import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogContext } from './BlogProvider';
import CommentSection from './CommentSection';
import SimilarArticles from './SimilarArticles.js';

const BlogArticle = () => {
    const { id } = useParams();
    const { blogs, loading, error } = useContext(BlogContext);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const blog = blogs.find(blog => blog.id === parseInt(id));

    if (!blog) return <div>Blog not found</div>;

    return (
        <article className="blog-article">
            <h1>{blog.title}</h1>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <p className="post-info">
                <span className="author">{blog.author}</span>
                <span className="separator"> - </span>
                <span className="date">{blog.date}</span>
            </p>
            <div dangerouslySetInnerHTML={{ __html: blog.post }} />
            <CommentSection blogId={blog.id} />
            <SimilarArticles currentBlogId={blog.id} />
        </article>
    );
};

export default BlogArticle;