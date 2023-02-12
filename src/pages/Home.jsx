import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const URL =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=f6ffe98b5dc08916d40352e501f3317f';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(URL)
      .then(data => {
        setPosts(data.data.results);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <div className="wrapper">
      <h1>Trending today</h1>
      {posts.map(post => (
        <Link key={post.id} to={`/movies/${post.id}`} state={location.pathname}>
          <li>{post.title || post.name}</li>
        </Link>
      ))}
      {error && <h3>{error}</h3>}
    </div>
  );
};
export { Home };
