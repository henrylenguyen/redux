import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    loading: true,
    errorMessage: "",
  },
  reducers: {
    setNews: (state, action) => {
      return {
        ...state,
        hits: action.payload,
      };
    },
    getNews() {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setErrorMessage: (state, action) => ({
      ...state,
      errorMessage: action.payload,
    }),
  },
});
export const { setNews, getNews, setLoading, setErrorMessage } = newsSlice.actions;
export default newsSlice.reducer;