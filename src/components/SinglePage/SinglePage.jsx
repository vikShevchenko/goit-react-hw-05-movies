import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink, Outlet, useLocation} from "react-router-dom";
import axios from "axios";
import './SinglePage.css';
import PropTypes from 'prop-types';

const SinglePage =()=> {

    const [post , setPosts] = useState(null);
    const [error, setError] = useState(null);
    const {id} =useParams();

    const location = useLocation();
    const navigate = useNavigate();
    const goBack =()=> {
      navigate(location.state)    
    }

 useEffect(()=> {
    axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=f6ffe98b5dc08916d40352e501f3317f`)
    .then(data => {
      setPosts(data.data) 
    })
    .catch(error => setError(error))
    
 },[id]);
  
    return (
      <div>
        <button className="button" onClick={goBack}>Go Back</button>

        {post && (
          <div className="wripper">
            <img className="image"
              src={` https://image.tmdb.org/t/p/w500/${post.poster_path}`}
              alt="imagFilm"
            ></img>
            <div className="titles">
            <h2 className="postTitle">{post.title}</h2>
            <h4>User scope: {post.popularity}</h4>

            <h3>Overview</h3>
            <p>{post.overview}</p>

            <h3>Genres</h3>
            {post.genres.map(genr => (
              <p className="genresTitle" key={genr.id}>{genr.name}</p>
            ))}
            </div>
          </div>
        )}
        {error && <h3>{error}</h3>}
        <div className="addInfo">
            <h4 className="addInfoTitle">Additional information</h4>
            <ul>
                <li><NavLink to='cast' state={id}>Cast</NavLink></li>
                <li><NavLink to='reviews' state={id}>Reviews</NavLink></li>
            </ul>
        </div>  
        <Outlet /> 
      </div>
    );
}
SinglePage.propTypes = {
  id: PropTypes.number,
  location: PropTypes.shape({
    state: PropTypes.string
  })
}
export default SinglePage