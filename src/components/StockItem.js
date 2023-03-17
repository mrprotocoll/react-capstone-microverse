import { PropTypes } from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getStockDetails } from 'redux/stock/stocksSlice';
import styles from 'styles/StockItem.module.css';

const StockItem = ({ data }) => {
  const dispatch = useDispatch();
  const getDetails = (e) => {
    e.preventDefault();
    dispatch(getStockDetails(data.symbol));
    window.location = './details';
  };

  return (
    <div className={styles.item}>
      <button type="button" aria-label={data.name} onClick={getDetails}><FaArrowRight /></button>
      <h2>{data.name}</h2>
      <h3>
        $
        {data.price}
      </h3>
    </div>
  );
};

StockItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};
export default StockItem;
