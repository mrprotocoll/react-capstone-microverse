import { configureStore } from '@reduxjs/toolkit';
import stocksSlice from './stock/stocksSlice';

const store = configureStore({
  reducer: {
    stock: stocksSlice,
  },
});

export default store;
