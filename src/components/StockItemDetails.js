import { PropTypes } from 'prop-types';
import styles from 'styles/StockItem.module.css';

const StockItemDetails = ({ data }) => (
  <div className={styles.item}>
    <h2>{data.name}</h2>
    <hr/>
  </div>
);

StockItemDetails.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }
  ).isRequired
};

export default StockItemDetails;
