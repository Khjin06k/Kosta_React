import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BoardList from './component/BoardList';
import {Routes, Route} from 'react-router-dom';
import BoardNav from './component/BoardNav';
import Register from './component/Register';
import Modify from './component/Modify';
import BoardDetail from './component/BoardDetail';
import Login from './component/Login';
import Join from './component/Join';


// 리액트에서 특정 url에 파라미터를 넘기기 위해서는 /:를 사용해서 파라미터 지정이 가능하며 이는 useParam을 사용함
function App() {
  return (
    <div className="App">
      <BoardNav/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/:page" element={<BoardList/>}/> 
        <Route path="/register" element={<Register/>}/>
        <Route path="/modify/:num" element={<Modify/>}/>
        <Route path="/boardDetail/:num" element={<BoardDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
