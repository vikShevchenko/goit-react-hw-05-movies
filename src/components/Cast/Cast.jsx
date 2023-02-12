import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Cast.css';
import PropTypes from 'prop-types';

const Cast = () => {
  const location = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${location.state}/credits?api_key=f6ffe98b5dc08916d40352e501f3317f`
      )
      .then(data => {
        setData(data.data);
      })
      .catch(error => console.log(error));
  }, [location.state]);
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
                    : `https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available-250x417.png`
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

Cast.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.number
  })
}
export default Cast