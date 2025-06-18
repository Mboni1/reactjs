import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Comments = ({ comments, articleId }) => {
  const [newComment, setNewComment] = useState('');
  const [allComments, setAllComments] = useState(comments);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const comment = {
      id: Date.now(),
      author: 'You',
      content: newComment,
      date: new Date().toLocaleDateString(),
    };
    
    setAllComments([...allComments, comment]);
    setNewComment('');
  };

  return (
    <div className="mt-4">
      <h4 className="font-medium mb-2">Comments ({allComments.length})</h4>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Add a comment..."
          rows={3}
        />
        <button 
          type="submit" 
          className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
        >
          Post Comment
        </button>
      </form>
      <div className="space-y-3">
        {allComments.map((comment) => (
          <div key={comment.id} className="p-3 bg-gray-50 rounded">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>{comment.author}</span>
              <span>{comment.date}</span>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  articleId: PropTypes.number.isRequired,
};

export default Comments;