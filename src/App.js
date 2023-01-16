import React, { useEffect } from "react";



function App() {
  // Generator function
  useEffect(()=>{
    function* demoGenerator(){
      console.log("running");
      let id=1;
      while(true){
        yield id;
        id++;
      }
    }
    const gen = demoGenerator();
    console.log(gen.next());
  },[])
  return (
    <div>
      
    </div>
  );
}

export default App;
