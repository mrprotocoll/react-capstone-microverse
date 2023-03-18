import { PropTypes } from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from 'styles/StockItem.module.css';

const StockItem = ({ data }) => (
  <li>
    <Link className={styles.item} to={`/details/${data.symbol}`}>
      <div className={styles.arrow}><FaArrowRight /></div>
      <div>
        <h2>{data.symbol}</h2>
        <small>{data.name}</small>
        <h3>
          $
          {data.price}
        </h3>
      </div>
    </Link>
  </li>
);

StockItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};
export default StockItem;
