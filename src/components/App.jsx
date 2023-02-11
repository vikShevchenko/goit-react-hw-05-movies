import { MovieDetals } from "pages/MovieDetals";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import {Home} from "../pages/Home";
import {Movies} from "../pages/Movies";
import {SinglePage} from "../pages/SinglePage"
import './App.css';
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
    <div className="container">
      <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="/movies/:id" element={<SinglePage />}>
          <Route path='cast' element={<MovieDetals />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Route>
      </Routes>  
    </div>
  );
};
