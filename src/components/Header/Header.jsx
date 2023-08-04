import { FaFilm } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components';
import { routes } from 'routes';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={css.Header}>
          <div className={css.headerContainer}>
            <FaFilm size="25px" color="#ffffffe0" />
            <div className={css.links}>
              <NavLink className={css.linksWraper} to={routes.HOME}>Home</NavLink>
              <NavLink className={css.linksWraper} to={routes.MOVIES}>Movies</NavLink>
            </div>
          </div>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
