import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementByValue,
  increment,
  decrement,
} from "../../redux-toolkit/counterSlice";
// import { decrement, increment, incrementByValue } from "../../redux/Counter";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByValue = () => {
    dispatch(incrementByValue(10));
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-20 border border-gray-400 max-w-[400px] shadow-sm bg-white">
      <h2 className="m-5">Count: {count}</h2>
      <div className="flex mb-5">
        <button
          className="px-12 py-5  rounded-xl bg-green-500 text-white"
          onClick={handleDecrement}
        >
          Giảm
        </button>
        <button
          className="px-12 py-5  ml-4 rounded-xl bg-red-600 text-white"
          onClick={handleIncrement}
        >
          Tăng
        </button>
        <button
          className="px-12 py-5  ml-4 rounded-xl bg-blue-600 text-white"
          onClick={handleIncrementByValue}
        >
          Tăng 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
