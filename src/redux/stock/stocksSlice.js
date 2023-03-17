const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const symbols = ["AAPL","MSFT", "AMZN", "TSLA", "GOOGL", "NVDA", "META", "UNA", "FB", "A", "AA"];

const APIKEY = "5f2391e8b083f36ed9393adfab96e39f";
const URL = `https://financialmodelingprep.com/api/v3/quotes/nyse?apikey=${APIKEY}`;

export const getStocks = createAsyncThunk("stock/getStocks", async() => {
    const data = await fetch(URL);
    const res = await data.json();
    return res;
}) 

const StockSlice = createSlice({
    name: "stock",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStocks.fulfilled,(state) => state)
    }
})

export default StockSlice.reducer