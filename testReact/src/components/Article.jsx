import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';


const Article = ({ article, onTagClick, variant }) => {
  const { title, content,tags,date, author } = article;

  return (
    <div className={`article ${variant || 'default'}`}>
      <h2>{title}</h2>
      <p><em>By {author} on {new Date(date).toLocaleDateString()}</em></p>
      <p>{content}</p>
      {tags && (
        <div>
          Tags:{" "}
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{ cursor: 'pointer', marginRight: '8px', color: 'blue' }}
              onClick={() => onTagClick && onTagClick(tag)}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onTagClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'featured']),
};

export default Article;
