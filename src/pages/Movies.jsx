import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios';
import './Movies.css';

export const Movies = () => {

  const [inputText, setInputText] = useState('');
  const [search, setSearch] = useState(null);
  const [post, setPosts] = useState(null);
  const location = useLocation();
 
  const hendleSubmit =(e)=> {
    e.preventDefault();
    inputText && setSearch(inputText)
    setInputText('')
  }

  const hendleChenge =(e)=> {
    setInputText(e.target.value)  
  }

  useEffect(()=> {
    axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=f6ffe98b5dc08916d40352e501f3317f&query=${search}&page=1`)
    .then(data => {
      setPosts(data.data)
    })
    .catch(error => console.log(error))  
 },[search]);


  return (
    <div className='form'>
      <form >
        <input type="text" name="name" onChange={hendleChenge} value={inputText}
        />
        <button  onClick={hendleSubmit}>Search</button>
      </form>
      <ul className='formElement'>
      {search && post.results.map(data => <li key={data.id}>  <Link to={`/movies/${data.id}`} state={location.pathname}>{data.title}</Link></li>)}
      </ul>
    </div>
  )
}