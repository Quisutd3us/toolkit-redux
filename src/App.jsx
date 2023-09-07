import {useSelector, useDispatch} from "react-redux";
import {increment,decrement,incrementByStep} from "./store/slices/counter";
import './App.css'

function App() {
  const {counter} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
      <>
        <h1>Vite + React + Redux</h1>
        <div className="card"  style={{display:"flex",flexDirection:'column',gap:10}}>
          <code>count is {counter}</code>
          <button onClick={() => dispatch(increment())}>
            +1
          </button>
          <button onClick={() => dispatch(decrement())}>
            -1
          </button>
          <button onClick={() => dispatch(incrementByStep(2))}>
            Increment By 2
          </button>
        </div>
      </>
  )
}

export default App
