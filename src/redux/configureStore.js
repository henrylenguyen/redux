import { createStore,combineReducers } from 'redux';
import CountReducer from './Counter';


// combineReducer nhận vào là 1 object, nó có nhiệm vụ gôm nhóm các reducer
const reducer = combineReducers({
  //key: value, key là giá trị mình đặt cho reducer. value là reducer khởi tạo bên counter
  counter: CountReducer,
});
// khởi tạo store
const store = createStore(reducer);
export default store;