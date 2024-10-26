import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from './BlogProvider';
import CommentSection from './CommentSection';
import ShareButtons from './ShareButtons';
import { FaFire, FaTimes } from 'react-icons/fa';


const BlogArticle = () => {
    const { id } = useParams();
    const { blogs, loading, error } = useContext(BlogContext);
    const [showComments, setShowComments] = useState(false);
    const [commentCount, setCommentCount] = useState(0);

    // Effect to manage body overflow based on comment visibility
    useEffect(() => {
        document.body.style.overflow = showComments ? 'hidden' : 'unset';
    }, [showComments]);

    // Effect to fetch initial comment count when component mounts
    useEffect(() => {
        const fetchInitialCommentCount = () => {
            const storedComments = localStorage.getItem(`comments_${id}`);
            if (storedComments) {
                const parsedComments = JSON.parse(storedComments);
                setCommentCount(parsedComments.length);
            } else {
                setCommentCount(0);
            }
        };

        fetchInitialCommentCount();
    }, [id]);

    // Loading and error states
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Find the current blog post
    const currentBlog = blogs.find(blog => blog.id === parseInt(id));
    if (!currentBlog) return <div>Blog not found</div>;

    const currentUrl = window.location.href;

    // Toggle comments visibility
    const toggleComments = () => {
        setShowComments(prev => !prev);
    };

    // Handle comment count changes
    const handleCommentCountChange = (count) => {
        setCommentCount(count);
    };

    return (
        <div className={`blog-container ${showComments ? 'with-sidebar' : ''}`}>
            <article className="blog-article">
                <h1 className="blog-title">{currentBlog.title}</h1>
                <p className="blog-subtitle">{currentBlog.subtitle}</p>
                
                <div className="author-info">
                    <img src="/image/profileA.png" alt={currentBlog.author} className="author-image" />
                    <div className="author-details">
                        <p>by <span className="author-name">{currentBlog.author}</span></p>
                        <p className="author-position">{currentBlog.authorPosition || "Author Position"}</p>
                    </div>
                </div>

                {/* Blog Image */}
                <img src={currentBlog.image} alt={currentBlog.title} className="blog-image" />

                <p className="post-info">
                    <span className="date">{currentBlog.date}</span>
                </p>

                <div className="blog-full-content" dangerouslySetInnerHTML={{ __html: currentBlog.post }} />

                {/* View Comments button */}
                <div className="article-actions end-of-article">
                    <button className="view-comments-btn" onClick={toggleComments}>
                        <FaFire /> View {commentCount} Comments
                    </button>
                </div>

                {/* Share buttons */}
                <ShareButtons url={currentUrl} title={currentBlog.title} />
            </article>

            {/* Comments sidebar */}
            {showComments && (
                <div className="comments-sidebar">
                    <button className="close-comments-btn" onClick={toggleComments}>
                        <FaTimes />
                    </button>
                    <CommentSection
                        blogId={currentBlog.id}
                        onCommentCountChange={handleCommentCountChange}
                    />
                </div>
            )}
        </div>
    );
};

export default BlogArticle;