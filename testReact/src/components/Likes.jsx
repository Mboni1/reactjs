import React from 'react';
import PropTypes from 'prop-types';

const Likes = ({ articleId, initialLikes }) => {
  const [likes, setLikes] = React.useState(initialLikes);
  const [hasLiked, setHasLiked] = React.useState(false);

  const handleLike = () => {
    const newLikes = hasLiked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setHasLiked(!hasLiked);
  };

  return (
    <button 
      onClick={handleLike}
      className={`flex items-center gap-1 ${hasLiked ? 'text-red-500' : 'text-gray-500'}`}
      aria-label={hasLiked ? 'Unlike this article' : 'Like this article'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill={hasLiked ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>{likes}</span>
    </button>
  );
};

Likes.propTypes = {
  articleId: PropTypes.number.isRequired,
  initialLikes: PropTypes.number.isRequired,
};

export default Likes;