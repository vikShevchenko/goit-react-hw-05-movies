import './Layout.css'
import { NavLink, Outlet } from 'react-router-dom';

export function Layout() {
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