import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStocks } from 'redux/stock/stocksSlice';
import styles from 'styles/Home.module.css';
import StockItem from './StockItem';

const Home = () => {
  const { stocks } = useSelector((store) => store.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <div className="container">
      <ul className={styles.items}>
        {
          stocks.map((stock) => <StockItem key={stock.symbol} data={stock} />)
        }
      </ul>
    </div>
  );
};

export default Home;
