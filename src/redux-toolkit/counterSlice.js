import { createSlice } from "@reduxjs/toolkit";

// createSlice nhận vào là 1 Object để sử lí các action
const counterSlice = createSlice({
  // createSlice cần name để truyền qua combineReducers
  name: "counter",

  // Tạo biến khởi tạo trực tiếp trong createSlice thay vì tạo riêng như redux thuần

  initialState: {
    count: 0,
  },

  // Tạo reducers nhận vào 1 Object reducer và action
  reducers: {
    // incrementByValue là action (không cần phải tạo type như redux thuần)
    // {payload} là destructuring Object, thay vì action.payload => {payload}
    incrementByValue: (state, { payload }) => {
      return {
        ...state,
        count: state.count + payload,
      };
    },
    increment: (state, { payload }) => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    decrement: (state, { payload }) => {
      return {
        ...state,
        count: state.count - 1,
      };
    },
  },
});
// Export các action
export const { incrementByValue, increment, decrement } = counterSlice.actions;
// Export reducer
export default counterSlice.reducer;
