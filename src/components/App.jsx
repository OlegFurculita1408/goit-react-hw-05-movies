import { Route, Routes } from 'react-router-dom';
import { routes } from '../routes';
import { Header } from 'components';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Error = lazy(() => import('pages/Error/Error'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Review = lazy(() => import('components/Review/Review'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />}>
            <Route path={routes.MOVIE_CAST} exact element={<Cast />} />
            <Route path={routes.MOVIE_REVIEWS} exact element={<Review />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
export default App
