import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card/Card";
import useDarkMode from "./components/Hooks/useDarkMode";
import { toggleMode } from "./redux-toolkit/globalSlice";

function App() {
  const globalOptions = useSelector((state) => state.global);
   const [darkMode, setDarkMode] = useDarkMode();
   console.log("globalOptions", globalOptions);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(toggleMode(!darkMode));
  },[])
  const handleToggleMode = () => {
    setDarkMode(!darkMode)
    dispatch(toggleMode(!darkMode));
  };

  return (
    <div>
      <Card></Card>
      <button
        className="p-5 bg-green-500 text-white m-5 text-sm rounded-xl"
        onClick={handleToggleMode}
      >
        Toggle Mode
      </button>
    </div>
  );
}

export default App;
