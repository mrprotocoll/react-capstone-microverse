import { configureStore } from '@reduxjs/toolkit';
import stocksSlice from './stock/stocksSlice';

const store = configureStore({
  reducer: {
    stocks: stocksSlice,
  },
});

export default store;
