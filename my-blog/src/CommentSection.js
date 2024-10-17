import React, { useState, useEffect } from 'react';
import { useUser } from './UserContext';
import './App.css';

const CommentSection = ({ blogId }) => {
    const [commentList, setCommentList] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');
    const { user } = useUser();

    useEffect(() => {
        const storedComments = localStorage.getItem(`comments_${blogId}`);
        if (storedComments) {
            setCommentList(JSON.parse(storedComments));
        } else {
            const initialComments = [
                {
                    id: 1,
                    text: `This is a sample comment for blog post ${blogId}`,
                    author: 'John Doe',
                    date: new Date(2023, 9, 15).toISOString()
                }
            ];
            setCommentList(initialComments);
            localStorage.setItem(`comments_${blogId}`, JSON.stringify(initialComments));
        }
    }, [blogId]);

    const handleSubmitComment = (e) => {
        e.preventDefault();
        if (newCommentText.trim() && user) {
            const newComment = {
                id: Date.now(),
                text: newCommentText,
                author: user.username,
                date: new Date().toISOString()
            };
            const updatedComments = [...commentList, newComment];
            setCommentList(updatedComments);
            localStorage.setItem(`comments_${blogId}`, JSON.stringify(updatedComments));
            setNewCommentText('');
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
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                        placeholder="Add a comment..."
                    />
                    <button type="submit">Post Comment</button>
                </form>
            ) : (
                <p>Please log in to post a comment.</p>
            )}
            <div className="comments-list">
                {commentList.map(comment => (
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