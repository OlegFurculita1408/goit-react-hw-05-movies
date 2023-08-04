import PropTypes from 'prop-types';
import css from './MovieCard.module.css';

export const MovieCard = ({ movie }) => {
  const { poster_path, original_title, title, overview, genres, vote_average } = movie;

  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const defaultImageUrl = "https://equip.uz/img/default.jpg";
  const genreNames =
    genres.length === 1
      ? genres[0].name
      : genres.map(genre => genre.name).join(', ');

  return (
    <>
      <div className={css.cardContainer}>
        <img
          loading="lazy"
          className={css.images}
          width={500}
          src={poster_path ? imageUrl : defaultImageUrl}
          alt={title ? title : original_title}
        />
        <div>
          <div className={css.textWraper}>
            <h1>{title ? title : original_title}</h1>
            <p>
              User score: <span>{Math.round(vote_average * 10)}%</span>
            </p>
          </div>

          <div className={css.textWraper}>
            <h2>Overview</h2>
            <p>{overview ? overview : "Haven't overview"}</p>
          </div>

          <div className={css.textWraper}>
            <h3>Genres</h3>
            <p>{genreNames}</p>
          </div>
        </div>
      </div>
    </>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    vote_average: PropTypes.number,
  }).isRequired,
};
