import { price } from 'hof/format';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import styles from 'styles/Hero.module.css';

const Hero = ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.overlay} />
    <Link to={`/details/${data.symbol}`} className={styles.content}>
      <h2>{data.name}</h2>
      <small>{data.symbol}</small>
      <h3>{price(data.price)}</h3>
    </Link>
  </div>
);

Hero.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};
export default Hero;
