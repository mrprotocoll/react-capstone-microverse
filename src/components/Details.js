import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStockDetails } from 'redux/stock/stocksSlice';
import styles from 'styles/Home.module.css';
import StockItemDetails from './StockItemDetails';

const Details = () => {
  const { details } = useSelector((store) => store.stock);
  const symbol = useParams();
  console.log(symbol);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStockDetails(symbol));
  }, [dispatch, symbol]);
  return (
    <div className="container">
      <ul className={styles.details}>
        <StockItemDetails key={details.symbol} name="Name" value={details.name} />
      </ul>
    </div>
  );
};

export default Details;
