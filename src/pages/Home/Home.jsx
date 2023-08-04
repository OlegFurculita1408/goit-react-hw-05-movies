import { Loader, MoviesList } from 'components';
import { useEffect, useState } from 'react';
import { GetInTrendMovies } from '../../service/Api';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await GetInTrendMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <section>
        <div className={css.container}>
          <h1 className={css.title}>Trending Today</h1>
          {movies && <MoviesList movies={movies} />}
          {isLoading && <Loader />}
          {error && <p>Oops... Something went wrong...</p>}
        </div>
      </section>
    </main>
  );
};

export default Home;
