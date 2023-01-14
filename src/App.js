import React from "react";
import { useSelector } from "react-redux";
import Counter from "./components/counter/Counter";

function App() {
  // useSelector dùng để chọn reducer cần sử dụng, state.key.initialState
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <h2>Gía trị hiện tại: {count}</h2>
      <Counter></Counter>
    </div>
  );
}

export default App;
