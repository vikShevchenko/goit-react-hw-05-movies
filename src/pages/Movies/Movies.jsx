import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Movies.css';
import { SearchMovie } from 'services/apiPack';
import { Posts } from '../Posts/Posts';

const Movies = () => {
  const [inputText, setInputText] = useState('');
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState(null);
  const location = useLocation();

  const hendleSubmit = e => {
    e.preventDefault();
    inputText && setSearch(inputText);
    setInputText('');
  };

  const hendleChenge = e => {
    setInputText(e.target.value);
    setSearch('');
  };

  useEffect(() => {
    async function fachMovies() {
      try {
        const data = await SearchMovie(search);
        setPosts(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fachMovies();
  }, [search]);

  return (
    <div className="form">
      <form>
        <input
          type="text"
          name="name"
          onChange={hendleChenge}
          value={inputText}
        />
        <button onClick={hendleSubmit}>Search</button>
      </form>
      <ul className="formElement">
        {search && <Posts posts={posts} location={location} />}
      </ul>
    </div>
  );
};
export default Movies;
