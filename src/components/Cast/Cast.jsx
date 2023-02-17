import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Cast.css';
import PropTypes from 'prop-types';
import {GetCast} from 'services/apiPack'

const Cast = () => {

  const [data, setData] = useState();
  const {id} = useParams()

  useEffect(()=> { 
    async function fatchCast(){
    try {
      const data = await GetCast(id);
      setData(data);
    }catch (error){
      console.log(error)
    }
   } 
   fatchCast()
  },[id])

  return (
    <div className="wripperDetals">
      MovieDetails
      <ul className="movieDetalsList">
        {data &&
          data.cast.map(actor => (
            <li className="movieLi" key={actor.cast_id}>
              <img
                className="movieDetalsListFoto"
                src={
                  actor.profile_path
                    ? ` https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : `https://via.placeholder.com/100x150.png?text=Foto+not+found`
                }
                alt={actor.title}
              ></img>
              {actor.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {id: PropTypes.number}

export default Cast