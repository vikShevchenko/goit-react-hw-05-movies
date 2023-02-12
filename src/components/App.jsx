import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import './App.css';

const SinglePage = lazy(() => import('./SinglePage/SinglePage'));
const MovieDetals = lazy(() => import('./MoeveDetals/MovieDetals'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/movies/:id" element={<SinglePage />}>
              <Route path="cast" element={<MovieDetals />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="/movies" element={<Movies />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
