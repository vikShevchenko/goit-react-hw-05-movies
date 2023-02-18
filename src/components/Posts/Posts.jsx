import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Posts = ({ posts }) => {
  const location = useLocation()
  
  return (
    <>
      {posts && posts.map(post => (
        <Link key={post.id} to={`/movies/${post.id}`} state={{from: location}} > 
          <li>{post.title || post.name}</li>
        </Link>
      ))}
    </>
  );
};
 
Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string
    })
  )
}