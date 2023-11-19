import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MakeAccount from './component/MakeAccount';
import AccountInfo from './component/AccountInfo';
import AllAccountInfo from './component/AllAccountInfo';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import BankNav from './component/BankNav';
import Login from './component/Login';
import Join from './component/Join';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './Persist_store';
import Logout from './component/Logout';

export const persister = persistStore(store); // 사용해야 해서 export 진행하고, 로그아웃 시 App에 있는 persistor을 임폴트 진행
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <BrowserRouter>
            <BankNav />
            <Routes>
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/logout' element={<Logout />} />
              <Route exact path='/join' element={<Join />} />
              <Route exact path="/" element={<MakeAccount />} />
              <Route exact path="/accountInfo" element={<AccountInfo />} />
              <Route exact path="/deposit" element={<Deposit />} />
              <Route exact path="/withdraw" element={<Withdraw />} />
              <Route exact path="/allAccountInfo" element={<AllAccountInfo />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
