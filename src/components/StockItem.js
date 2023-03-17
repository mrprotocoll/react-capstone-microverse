import { PropTypes } from 'prop-types';
import styles from 'styles/Home.module.css';

const StockItem = ({ name, price }) => (
  <div className={styles.item}>
    <h2>{name}</h2>
    <h3>
      $
      {price}
    </h3>
  </div>
);

StockItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default StockItem;
