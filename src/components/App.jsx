import { MovieDetails } from "pages/MovieDetails";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import {Home} from "../pages/Home";
import {Movies} from "../pages/Movies";
import {SinglePage} from "../pages/SinglePage"
import './App.css'
import { Reviews } from "pages/Reviews";


function Layout() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
export const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="/movies/:id" element={<SinglePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path='/movies/:id/cast' element={<MovieDetails />} />
        <Route path='/movies/:id/reviews' element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Route>
      </Routes>  
    </div>
  );
};
