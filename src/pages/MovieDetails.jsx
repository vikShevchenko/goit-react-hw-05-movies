import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export const MovieDetails = () => {

  const location = useLocation()
  const [data, setData] = useState()
  
 useEffect(()=> {

  axios
  .get(`https://api.themoviedb.org/3/movie/${location.state}/credits?api_key=f6ffe98b5dc08916d40352e501f3317f`)
  .then(data => {
    setData(data.data) 
  })
  .catch(error => console.log(error))



    // console.log()
  },[location.state])
  
  return (
    <div>MovieDetails
    
     
      {data && data.cast.map(actor => (<li key={actor.cast_id}>{actor.name}</li>))}
     </div>
  )
}
