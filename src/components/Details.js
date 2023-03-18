import { percentage, price } from 'hof/format';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStockDetails } from 'redux/stock/stocksSlice';
import styles from 'styles/Details.module.css';
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
        <StockItemDetails name="Symbol" value={details.symbol} />
        <StockItemDetails name="Previous close" value={price(details.previousClose)} />
        <StockItemDetails name="Price" value={price(details.price)} />
        <StockItemDetails name="Changes Percentage" value={percentage(details.changesPercentage)} />
        <StockItemDetails name="Exchange" value={details.exchange} />
        <StockItemDetails name="Year High" value={price(details.yearHigh)} />
        <StockItemDetails name="Year Low" value={price(details.yearLow)} />
      </ul>
    </div>
  );
};

export default Details;
