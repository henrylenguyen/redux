import {createSlice} from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    dardMode: false,
    showSideBar: true,
  },
  reducers: {
    toggleMode: (state, { payload }) => {
      return {
        ...state,
        dardMode: payload,
      };
    },
    toggleSideBar: (state, { payload }) => ({
      ...state,
      showSideBar: payload,
    }),
  },
});

// Export các actions
export const { toggleMode, toggleSideBar } = globalSlice.actions;
//Export reducer
export default globalSlice.reducer;