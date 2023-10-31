import './App.css';
import {createStore} from 'redux'; // 갱신이 되면 사라지는 아이
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Page1 from './Page1';

/*const initState = {
  data1 : 'NONE',
  data2 : 0
}*/

const reducer = (state, action) => {
  // 위에처럼 initState를 선언하여 사용해도 되지만, reducer 에서 state가 정의되어 있지 않을 경우 정의해주는 if문을 사용하기도 함
  if(state === undefined){
    return {
      data1 : 'NONE',
      data2 : 0
    }
  }

  const newState = {...state};
  switch(action.type){
    case "STRING" : newState.data1=action.data; break;
    case "INT" : newState.data2=action.data; break;
    default:
  }
  return newState;
}

const store = configureStore({reducer}); // configureStore의 경우 객체 타입을 파라미터로 갖기 때문에 중괄호로 감싸줘야 함
//const store = createStore(reducer)
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Page1/>
      </div>
    </Provider>
  );
}

export default App;
