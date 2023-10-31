import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
// 가져다가 사용하기 위해 Selector, useDispatch 사용

function App() {
  const dispatch=useDispatch();
  const {value}=useSelector(state=>state.value);
  const {count}=useSelector(state=>state.count);
  return (
    <div className="App">
      <div>value:{value}</div>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
      <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>

      <div>
        count : {count}
        <button onClick={()=>dispatch({type:"PUSH"})}>UP</button>
      </div>
    </div>

  );
}

export default App;
