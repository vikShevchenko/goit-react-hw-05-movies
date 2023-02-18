import { useState, useEffect } from 'react';
import { TrendingMovies } from 'services/apiPack';
import './Home.css';
import { Posts } from '../../components/Posts/Posts';

const Home = () => {
  const [posts, setPosts] = useState([]);

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
      <Posts posts={posts} />
    </div>
  );
};
export default Home;
