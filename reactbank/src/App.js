import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MakeAccount from './component/MakeAccount';
import AccountInfo from './component/AccountInfo';
import AllAccountInfo from './component/AllAccountInfo';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import BankNav from './component/BankNav';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BankNav/>
      {/* 변경되는 부분을 Route를 감싸주면 됨
      path는 nav 안에서의 path를 의미하며, 프론트에서의 루트를 의미
      이를 연결할 곳에서 import Link를 통해 아래 path를 이용하면 연결이 가능
      exact를 사용할 경우 하위 경로를 포함하지 않는 정확한 경로 설정을 원할 경우 exact를 사용하면 됨
      */}
      <Routes>
          <Route exact path="/" element={<MakeAccount/>}/>
          <Route exact path="/accountInfo" element={<AccountInfo/>}/>
          <Route exact path="/deposit" element={<Deposit/>}/>
          <Route exact path="/withdraw" element={<Withdraw/>}/>
          <Route exact path="/allAccountInfo" element={<AllAccountInfo/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
