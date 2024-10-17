import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from './BlogProvider';
import CommentSection from './CommentSection';

const BlogArticle = () => {
    const { id } = useParams();
    const { blogs, isLoading, error } = useContext(BlogContext);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const currentBlog = blogs.find(blog => blog.id === parseInt(id));
    if (!currentBlog) return <div>Blog not found</div>;

    return (
        <article className="blog-article">
            <h1>{currentBlog.title}</h1>
            <img src={currentBlog.image} alt={currentBlog.title} className="blog-image" />
            <p className="post-info">
                <span className="author">{currentBlog.author}</span>
                <span className="separator"> - </span>
                <span className="date">{currentBlog.date}</span>
            </p>
            <div dangerouslySetInnerHTML={{ __html: currentBlog.post }} />
            <CommentSection blogId={currentBlog.id} />
        </article>
    );
};

export default BlogArticle;