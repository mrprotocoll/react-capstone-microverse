const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const APIKEY = '5f2391e8b083f36ed9393adfab96e39f';
const URL = `https://financialmodelingprep.com/api/v3/stock/list?apikey=${APIKEY}`;

const initialState = {
  stocks: [],
  details: {},
};

export const getStocks = createAsyncThunk('stock/getStocks', async () => {
  const data = await fetch(URL);
  const res = await data.json();
  return res.filter((item, index) => index <= 100);
});

export const getStockDetails = createAsyncThunk('stock/getStockDetails', async (symbol) => {
  const data = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${APIKEY}`);
  const res = await data.json();
  return res[0];
});

const StockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStocks.fulfilled, (state, { payload }) => {
        state.stocks = payload;
      })
      .addCase(getStockDetails.fulfilled, (state, { payload }) => {
        state.details = payload;
      });
  },
});

export default StockSlice.reducer;
