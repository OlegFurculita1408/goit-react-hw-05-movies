import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetActors } from '../../service/Api';
import css from './Cast.module.css';
import { Loader } from 'components';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {  
      try {
        const cast = await GetActors(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);
  
  return (
    <>
      {cast.length === 0 && <p>Casts not found</p>}
      {cast.length > 0 && (
        <ul className={css.list}>
          {cast.map(({ id, profile_path, character, original_name }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w500${profile_path}`;
            const defaultImageUrl =
              "https://placehold.co/240x360?text=Haven't+Image";

            return (
              <li className={css.item} key={id}>
                <img
                  loading="lazy"
                  width='240px'
                  src={`${profile_path ? imageUrl : defaultImageUrl}`}
                  alt={original_name}
                />
                <div className={css.textContainer}>
                  <h3 className={css.title}>{original_name}</h3>
                  <p className={css.character}>
                    Character: <span>{character}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {isLoading && <Loader />}
      {error && <p> Oops... Something went wrong...</p>}
    </>
  );
};

export default Cast;
