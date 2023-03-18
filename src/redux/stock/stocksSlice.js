const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const APIKEY = '620f787d7d0ad9c13cdda696a1b3d942 ';
const URL = `https://financialmodelingprep.com/api/v3/stock/list?limit=120&apikey=${APIKEY}`;

const initialState = {
  stocks: [],
  temp: [],
  details: {},
  hero: {},
};

export const getStocks = createAsyncThunk('stock/getStocks', async () => {
  const data = await fetch(URL);
  const res = await data.json();
  return res;
});

export const getStockDetails = createAsyncThunk('stock/getStockDetails', async (symbol) => {
  const data = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${APIKEY}`);
  const res = await data.json();
  return res[0];
});

const StockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    filterStocks: (state, { payload }) => {
      state.stocks = state.stocks.filter((stock) => stock.symbol.includes(payload.toUpperCase()));
    },

    reverseStocks: (state) => {
      state.stocks = state.temp;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStocks.fulfilled, (state, { payload }) => {
        state.stocks = payload.filter((item, index) => item.exchangeShortName === 'NASDAQ' && index <= 100);
        state.temp = state.stocks;
        const [hero] = payload.filter((item) => item.symbol === 'AAPL');
        state.hero = hero;
      })
      .addCase(getStockDetails.fulfilled, (state, { payload }) => {
        state.details = payload;
      });
  },
});
export const { filterStocks, reverseStocks } = StockSlice.actions;

export default StockSlice.reducer;
