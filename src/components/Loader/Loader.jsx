import Loader from 'react-loader-spinner';
import styles from './Loader.module.scss';

const styledLoader = () => (
  <Loader
    className={styles.Loader}
    type="Circles"
    color="tomato"
    height={80}
    width={80}
  />
);

export default styledLoader;
