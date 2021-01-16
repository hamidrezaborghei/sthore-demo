import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { single } from '../../../stores/posts/actions';
import { getAll } from '../../../stores/comments/actions';
import Comment from '../../../components/Comment';
import './main.css';

const PostPage = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading, data: post } = useSelector(state => state.posts);
  const { isLoadingComments, data: comments } = useSelector(state => state.comments);

  useEffect(() => {
    dispatch(single({ id }));
    dispatch(getAll({ postID: id }));
  }, [dispatch, id]);

  return (
    <div className="page">
      {!isLoading && post
      ? (
        <div className="post">
          <h1 className="title">{post.title}</h1>
          <p className="body">{post.body}</p>
        </div>
      ) : null}
      {!isLoadingComments && comments
        ? (
          <div className="comments">
            <p className="title">Comments:</p>
            <ul className="items">
              {comments.map(comment => (
                <li key={comment.id}>
                  <Comment
                    {...comment}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null
      }
    </div>
  );
};

export default PostPage;