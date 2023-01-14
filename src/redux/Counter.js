const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTBYVALUE = "incrementbyvalue"

const initialState ={
  count: 0
}
// tạo action
export const increment = ()=>({
  type: INCREMENT
})
export const decrement = () => ({
  type: DECREMENT,
});
export const incrementByValue = (value) => ({
  type: INCREMENTBYVALUE,
  payload: value
});

// tạo reducer
const CountReducer = (state = initialState, action)=>{
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENTBYVALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      // throw new Error("Lỗi");
      return state;
  }
}
export default CountReducer;

