import { useLocation } from 'react-router-dom';
import { routes } from 'routes';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import css from './Error.module.css'


const ErrorPage = () => {
  const location = useLocation();

  const BackLink = useRef(location?.state?.from ?? routes.HOME);

  return (
    <>
      <section>
        <div className={css.container}>
          <Link className={css.link} to={BackLink.current}>Go Back</Link>
          <div className={css.textError}>
            <p>404 Not Found</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
