import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';
import PropTypes from 'prop-types';
import style from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ol className={style.item}>
      {movies.map(({ id, title, name, original_title }) => (
        <li className={style.itemList} key={id}>
          <Link className={style.listLink} state={{ from: location }} to={`${routes.MOVIES}/${id}`}>
            {title || name || original_title}
          </Link>
        </li>
      ))}
    </ol>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
