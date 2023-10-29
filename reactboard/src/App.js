import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BoardList from './component/BoardList';
import {Routes, Route} from 'react-router-dom';
import BoardNav from './component/BoardNav';
import Register from './component/Register';
import BoardDetail from './component/BoardDetail';


function App() {
  return (
    <div className="App">
      <BoardNav/>
      <Routes>
        <Route path="/boardList" element={<BoardList/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/boardDetail" element={<BoardDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
