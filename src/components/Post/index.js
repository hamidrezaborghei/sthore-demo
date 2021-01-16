import React from 'react';
import PropTypes from 'prop-types';
import './main.css';

const Post = (props) => {
   return (
    <div className="post">
      <h3 className="title">{props.title}</h3>
      <p className="body">{props.body}</p>
      <span className="delete" onClick={props.onDelete}>&times;</span>
    </div>
   );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Post;