import React, { useState, useEffect } from 'react';
import { useUser } from './UserContext';
import { FaCaretDown } from 'react-icons/fa';
import './App.css';

const CommentSection = ({ blogId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [sortBy, setSortBy] = useState('Most Reacted');
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const { user } = useUser();

    useEffect(() => {
        // Retrieve comments from localStorage
        const storedComments = localStorage.getItem(`comments_${blogId}`);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        } else {
            // If no stored comments, use the sample comment
            const initialComments = [
                { 
                    id: 1, 
                    text: 'This is a sample comment for blog post ' + blogId, 
                    author: 'John Doe',
                    date: new Date(2023, 9, 15).toISOString(),
                    reactions: 0
                }
            ];
            setComments(initialComments);
            localStorage.setItem(`comments_${blogId}`, JSON.stringify(initialComments));
        }
    }, [blogId]);

    const handleSubmitComment = () => {
        if (newComment.trim() && user) {
            const comment = {
                id: Date.now(),
                text: newComment,
                author: user.username,
                date: new Date().toISOString(),
                reactions: 0
            };
            const updatedComments = [...comments, comment];
            setComments(updatedComments);
            localStorage.setItem(`comments_${blogId}`, JSON.stringify(updatedComments));
            setNewComment('');
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const toggleSortDropdown = () => {
        setShowSortDropdown(!showSortDropdown);
    };

    const handleSortChange = (newSortBy) => {
        setSortBy(newSortBy);
        setShowSortDropdown(false);
    };

    const sortedComments = [...comments].sort((a, b) => {
        if (sortBy === 'Most Reacted') {
            return b.reactions - a.reactions;
        } else if (sortBy === 'Newest') {
            return new Date(b.date) - new Date(a.date);
        }
        return 0;
    });

    return (
        <div className="comment-section">
            <h3>Comments</h3>
            {user ? (
                <div className="comment-input">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                    />
                    <button onClick={handleSubmitComment} className="post-comment-btn">
                        <span>Post</span>
                    </button>
                </div>
            ) : (
                <p>Please log in to post a comment.</p>
            )}
            <div className="comment-header">
                <div className="comment-count">
                    {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
                </div>
                <div className="sort-dropdown">
                    <span>Sort by: </span>
                    <button onClick={toggleSortDropdown}>
                        {sortBy} <FaCaretDown />
                    </button>
                    {showSortDropdown && (
                        <ul className="dropdown-menu">
                            <li onClick={() => handleSortChange('Most Reacted')}>Most Reacted</li>
                            <li onClick={() => handleSortChange('Newest')}>Newest</li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="comments-list">
                {sortedComments.map(comment => (
                    <div key={comment.id} className="comment">
                        <div className="comment-info">
                            <small className="author">{comment.author}</small>
                            <small className="separator"> • </small>
                            <small className="date">{formatDate(comment.date)}</small>
                        </div>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;