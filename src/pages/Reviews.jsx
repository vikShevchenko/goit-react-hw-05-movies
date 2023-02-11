import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Reviews.css'

export const Reviews = () => {

  const location = useLocation()
  const [data, setData] = useState([])
  const [isValid, setIsValid] =useState(false)
  const [error, setError] = useState(null)
  
 useEffect(()=> {

  axios
  .get(`https://api.themoviedb.org/3/movie/${location.state}/reviews?api_key=f6ffe98b5dc08916d40352e501f3317f`)
  .then(data => {
    setData(data.data.results) 
    setIsValid(true)
  })
  .catch(error => { setError(error)
  setIsValid(false)})
  },[location.state])

  return (
    <div className='revContainer' >
      {data && isValid && (  
        <>
        <h3>Reviews</h3>
        <ul>
          {data.map(info => (<li key={info.id}><h4>{info.author}</h4><p>{info.content}</p></li>))}
        </ul>
        </>
      ) }

      {!data.length  && isValid && (<h3>Thete is no rewievs</h3>)}
      {error && <h3>{error}</h3>}
    </div>
  )
}