import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { increment, decrement } from "./actions/index";

export default function App() {
  const myState = useSelector((state) => state.numReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Redux Counter</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <input type="text" value={myState} />
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
