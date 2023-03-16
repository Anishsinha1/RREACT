
import React from 'react'
import './App.css';

const App=()=>{
  let[Count,setcount]=React.useState(0);
  let handleincrement=()=>{
    setcount(Count +1)
  }
  let handledrecrement=()=>{
    setcount(Count -1)
  }
  let handlereset=()=>{
    setcount(0)
  }
  return (
    <div className="App">
      <h1 className="hell">{Count}</h1>
     <button className='btn' onClick={handleincrement}>Increment++</button>
     <button className="btn"onClick={handledrecrement}>decrement--</button>
     <button className="btn"onClick={handlereset}>Reset </button>

    </div>
  );
}

export default App;
