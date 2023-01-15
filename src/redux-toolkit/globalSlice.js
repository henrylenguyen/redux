import {createSlice} from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState:{
    dardMode: false
  },
  reducers: {
    toggleMode: (state,{payload})=>{
      return {
        ...state,
        dardMode: payload,
      };

    }
  }
})

// Export các actions
export const { toggleMode } = globalSlice.actions;
//Export reducer
export default globalSlice.reducer;