import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import './MovieDetails.css';
import PropTypes from 'prop-types';
import { GetMovieById } from 'services/apiPack';


const MovieDetails = () => {
  const [post, setPosts] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const goBack = location.state;

  useEffect(() => {
    async function fetchMovie(id) {
      try {
        const data = await GetMovieById(id);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie(id);
  }, [id]);

  return (
    <div>
      <NavLink className="goBack" to={goBack}>
        {'<Go Back'}
      </NavLink>
      {post && (
        <div className="wripper">
          <img
            className="image"
            src={post.poster_path ?` https://image.tmdb.org/t/p/w500/${post.poster_path}`: `https://www.lincolnelectric.com/-/media/project/website/image-not-found-outlines-41.ashx`}
            alt="imagFilm"
          ></img>
          <div className="titles">
            <h2 className="postTitle">{post.title}</h2>
            <h4>User scope: {post.popularity}</h4>

            <h3>Overview</h3>
            <p>{post.overview}</p>

            <h3>Genres</h3>
            {post.genres.map(genr => (
              <p className="genresTitle" key={genr.id}>
                {genr.name}
              </p>
            ))}
          </div>
        </div>
      )}
      <div className="addInfo">
        <h4 className="addInfoTitle">Additional information</h4>
        <ul>
          <li>
            <NavLink to="cast" state={id}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={id}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
MovieDetails.propTypes = {
  id: PropTypes.number,
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
};
export default MovieDetails;
