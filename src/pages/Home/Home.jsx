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
      <h1 className="trendingTitle">Trending today</h1>
      <ul className="trendingList">
        <Posts posts={posts} />
      </ul>
    </div>
  );
};
export default Home;
