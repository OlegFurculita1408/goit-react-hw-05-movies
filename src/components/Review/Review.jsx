import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetReviews } from '../../service/Api';
import { Loader } from 'components';
import css from './Review.module.css';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const review = await GetReviews(movieId);
        setReviews(review);
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
      <div className={css.container}>
        {reviews.length === 0 && <p>Reviews not found</p>}
        {reviews.length > 0 && (
          <ul className={css.item}>
            {reviews.map(({ id, author, content }) => {
              return (
                <li className={css.itemList} key={id}>
                  <h3 className={css.title}>
                    Author: <span>{author}</span>
                  </h3>
                  <p className={css.textContent}>{content}</p>
                </li>
              );
            })}
          </ul>
        )}
        {isLoading && <Loader />}
        {error && <p>Oops... Something went wrong...</p>}
      </div>
    </>
  );
};

export default Review;
