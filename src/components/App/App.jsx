import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import { TailSpin } from  'react-loader-spinner'

const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Home = lazy(()=> import('pages/Home/Home'));
const Movies = lazy(()=> import('pages/Movies/Movies'))

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
    <div >
      <Suspense className="container" fallback={<TailSpin/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route> 
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
