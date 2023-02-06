import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Home.css'

const URL = "https://api.themoviedb.org/3/trending/movie/day?api_key=f6ffe98b5dc08916d40352e501f3317f";


const Home =()=> {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios
        .get(URL)
        .then(data => {
          setPosts(data.data.results)  //
        })
        .catch(error => console.log(error))
  },[]);

    return(
        <div className="wrapper">
            <h1>Trending today</h1>
            {
            posts.map(post =>(
                <Link key={post.id} to={`/movies/${post.id}`}>
                    <li>{post.title || post.name}</li>
                </Link>
            ))
            }
        </div>
    )
}
export {Home}