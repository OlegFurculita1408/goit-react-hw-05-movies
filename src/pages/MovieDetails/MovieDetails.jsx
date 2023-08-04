import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { routes } from 'routes';
import { GetAboutMovie } from '../../service/Api';
import { MovieCard, Loader } from 'components';
import { Link } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

 
  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await GetAboutMovie(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  const BackLink = useRef(location?.state?.from ?? routes.HOME);

  return (
    <main>
      <section>
        <div className={css.container}>
          <Link className={css.button} to={BackLink.current}>Go Back</Link>
          {movie && <MovieCard movie={movie} />}
          <h3>Additional information</h3>
          <ul>
            <li className={css.list}>
              <Link className={`${css.link} ${css.button}`} to="cast">Cast</Link>
            </li>
            <li className={css.list}>
              <Link className={`${css.link} ${css.button}`} to="reviews">Reviews</Link>
            </li>
          </ul>
          {isLoading && <Loader />}
          {error && <p>Oops... Something went wrong...</p>}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </section>
    </main>
  );
};
export default MovieDetails;
