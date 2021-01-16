import React from 'react';
import PropTypes from 'prop-types';
import './main.css';

const Comment = (props) => {
   return (
    <div className="comment">
      <h3 className="title">{props.name} <small className="email">({props.email})</small></h3>
      <p className="body">{props.body}</p>
    </div>
   );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;