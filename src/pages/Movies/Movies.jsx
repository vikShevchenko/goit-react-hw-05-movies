import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Movies.css';
import { SearchMovie } from 'services/apiPack';
import { Posts } from '../../components/Posts/Posts';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const searchFilm = searchParams.get('search');
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      if (searchFilm === null) return;
      try {
        const data = await SearchMovie(searchFilm);
        setPosts(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [searchFilm]);

  return (
    <div className="form">
      <SearchForm />
      <ul className="formElement">{searchFilm && <Posts posts={posts} />}</ul>
    </div>
  );
};
export default Movies;
