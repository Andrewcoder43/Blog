import React, { useState, useEffect } from 'react';
import { useUser } from './UserContext';
import './App.css';

const CommentSection = ({ blogId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
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
                    date: new Date(2023, 9, 15).toISOString()
                }
            ];
            setComments(initialComments);
            localStorage.setItem(`comments_${blogId}`, JSON.stringify(initialComments));
        }
    }, [blogId]);

    const handleSubmitComment = (e) => {
        e.preventDefault();
        if (newComment.trim() && user) {
            const comment = {
                id: Date.now(),
                text: newComment,
                author: user.username,
                date: new Date().toISOString()
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

    return (
        <div className="comment-section">
            <h3>Comments</h3>
            {user ? (
                <form onSubmit={handleSubmitComment}>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                    />
                    <button type="submit">Post Comment</button>
                </form>
            ) : (
                <p>Please log in to post a comment.</p>
            )}
            <div className="comments-list">
                {comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <div className="comment-header">
                            <div className="comment-info">
                                <small className="author">{comment.author}</small>
                                <small className="separator"> • </small>
                                <small className="date">{formatDate(comment.date)}</small>
                            </div>
                        </div>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;