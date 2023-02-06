import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink} from "react-router-dom";
import axios from "axios";
import '../pages/SinglePage.css'

export const SinglePage =()=> {

    const [post , setPosts] = useState(null)
    const {id} =useParams();

    const navigate = useNavigate();
    const goBack =()=> {
        navigate(-1)
    }

 useEffect(()=> {
    axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=f6ffe98b5dc08916d40352e501f3317f`)
    .then(data => {
      setPosts(data.data) 
    })
    .catch(error => console.log(error))
    
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

            <h3>Ganres</h3>
            {post.genres.map(genr => (
              <p className="genresTitle" key={genr.id}>{genr.name}</p>
            ))}
            </div>

          </div>
        )}
        <div className="addInfo">
            <h4 className="addInfoTitle">Additional information</h4>
            {/* {console.log(post)} */}

            <ul>
                <li><NavLink to='/movies/:id/cast' state={id}>Cast</NavLink></li>
                <li><NavLink to='/movies/:id/reviews'>Reviews</NavLink></li>
            </ul>
        </div>    

      </div>
    );
}
