import { Puff } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.LoadContainer}>
    <Puff
      height="80"
      width="80"
      radius={1}
      color="#2d24dd"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);
