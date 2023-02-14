import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TrendingMovies } from 'services/apiPack';
import './Home.css';
import { Posts } from '../Posts/Posts';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fachMovies = async () => {
      try {
        const data = await TrendingMovies();
        setPosts(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fachMovies();
  }, []);

  return (
    <div className="wrapper">
      <h1>Trending today</h1>
      <Posts posts={posts} location={location} />
    </div>
  );
};
export default Home;
