import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.css';
import MakeAccount from './component/MakeAccount';
import AccountInfo from './component/AccountInfo';
import AllAccountInfo from './component/AllAccountInfo';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import Main from './component/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/makeAccount" element={<MakeAccount/>}/>
          <Route exact path="/accountInfo" element={<AccountInfo/>}/>
          <Route exact path="/deposit" element={<Deposit/>}/>
          <Route exact path="/withdraw" element={<Withdraw/>}/>
          <Route exact path="/allAccountInfo" element={<AllAccountInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
