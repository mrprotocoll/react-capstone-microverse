import { PropTypes } from 'prop-types';
import styles from 'styles/StockItem.module.css';

const StockItemDetails = ({ name, value }) => (
  <li className={styles.item}>
    <h2>{name}</h2>
    <h3>{value}</h3>
    <hr />
  </li>
);

StockItemDetails.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default StockItemDetails;
