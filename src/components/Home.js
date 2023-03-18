import { price } from 'hof/format';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStocks } from 'redux/stock/stocksSlice';
import styles from 'styles/Home.module.css';
import StockItem from './StockItem';

const Home = () => {
  const { stocks, hero } = useSelector((store) => store.stock);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <div className="container">
      <div className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2>{hero[0].name}</h2>
          <small>{hero[0].symbol}</small>
          <h3>{price(hero[0].price)}</h3>
        </div>
      </div>
      <ul className={styles.items}>
        {
          stocks.map((stock) => <StockItem key={stock.symbol} data={stock} />)
        }
      </ul>
    </div>
  );
};

export default Home;
