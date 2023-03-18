import { PropTypes } from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from 'styles/StockItem.module.css';

const StockItem = ({ data }) => (
  <div className={styles.item}>
    <Link to={`/details/${data.symbol}`} className=""><FaArrowRight /></Link>
    <h2>{data.name}</h2>
    <h3>
      $
      {data.price}
    </h3>
  </div>
);

StockItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};
export default StockItem;
