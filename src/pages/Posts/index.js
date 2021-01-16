import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import Post from '../../components/Post';
import { getAll, create, remove } from '../../stores/posts/actions';
import './main.css';

const PostsPage = (props) => {
  const dispatch = useDispatch();
  const [displayForm, setDisplayForm] = useState(false);
  const { isLoading, data: posts } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <div>
      <p className="btn" onClick={() => setDisplayForm(!displayForm)}>{displayForm ? "Cancel" : "Add post"}</p>
      {displayForm
        ? (
          <Form onSubmit={(data) => dispatch(create(data))}/>
        ) : null
      }
      {!isLoading && Array.isArray(posts)
        ? (
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>
                  <Post
                    title={post.title}
                    body={post.body}
                    onDelete={(e) => {e.preventDefault(); dispatch(remove({ id: post.id }))}}
                  />
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
    </div>
  );
};

export default PostsPage;