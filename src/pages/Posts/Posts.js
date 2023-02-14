import React from 'react';
import { Link } from 'react-router-dom';

export const Posts = ({ posts, location }) => {
  return (
    <>
      {posts.map(post => (
        <Link key={post.id} to={`/movies/${post.id}`} state={location.pathname}>
          <li>{post.title || post.name}</li>
        </Link>
      ))}
    </>
  );
};
