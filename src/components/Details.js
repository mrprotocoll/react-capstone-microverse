import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStockDetails } from 'redux/stock/stocksSlice';
import styles from 'styles/Home.module.css';
import StockItemDetails from './StockItemDetails';

const Details = () => {
  const { details } = useSelector((store) => store.stock);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStockDetails(id));
  }, [dispatch, id]);
  return (
    <div className="container">
      <ul className={styles.details}>
        <StockItemDetails key={details.symbol} name="Name" value={details.name} />
        <StockItemDetails key={details.symbol} name="Previous close" value={details.previousClose} />
        <StockItemDetails key={details.symbol} name="Price" value={details.price} />
        <StockItemDetails key={details.symbol} name="Exchange" value={details.exchange} />
        <StockItemDetails key={details.symbol} name="Year High" value={details.yearHigh} />
        <StockItemDetails key={details.symbol} name="Year Low" value={details.yearLow} />
      </ul>
    </div>
  );
};

export default Details;
