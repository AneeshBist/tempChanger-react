import { useState } from 'react'

import './App.css'

function App() {
 
const [temp,setTemp] = useState(10);
const [tempCol, setTempCol] = useState("cold")

// const changeTemp = () => {
//   console.log(temp);
//setTemp(opr==="inc"?temp+1:temp-1);
//  switch (temp) {
//   case temp > 24: setTempCol("hot");
//   case temp < 15: setTempCol("cold");
//   default: setTempCol("neutral");
//  }

const incTemp = () => {
  if(temp===34) return;
  setTemp(temp+1);
  checkTempCol();
  
}
const decTemp = () => {
  if(temp===0) return;
  setTemp(temp-1);
   checkTempCol();
 
}
const checkTempCol = () => {
if(temp>=24) setTempCol("hot");
else if(temp<=15) setTempCol("cold");
else setTempCol("neutral");
}
  return (
    <>
      <div className="app-container">
        <div className='temperature-display-container'>
          <div className={`temperature-display ${tempCol}`}>{temp} &deg;C</div>
        </div>
        <div className="button-container">
          <button onClick={incTemp}>+</button>
          <button onClick={decTemp}>-</button>
        </div>
      </div>
    </>
  )
}

export default App
