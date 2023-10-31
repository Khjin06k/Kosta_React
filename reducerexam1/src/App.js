import logo from './logo.svg';
import './App.css';

// 리액트 자체가 제공하는 reducer
import { useReducer } from 'react';
import { useState } from 'react';
import Counter from './Counter';

// useState 대신에 useReducer를 사용하기는 하지만 useReducer가 리덕스를 대체할 수는 없음
// 그렇기에 useState를 많이 사용함
// useReducer는 로컬에서만 사용 가능하고 리덕스는 외부 데이터베이스를 사용한다고 이해하면 됨


// reducer : 함수로서 state를 업데이트 하는 역할; state(여러개의 객체를 가지고 있음)/action의 변수를 2개를 가져가 state를 action을 보고 바꿔주는 역할
// dispatche : state의 변경을 요청하는 역할; action을 가지고 넘어가 어떤것을 어떻게 바꿀지를 요청
// action : 요구의 내용; state의 어떤 값을 어떻게 변경할 것인지에 대한 정보를 가지고 있음

// 초기 state가 여러개라면 초기 initialstate를 따로 정의하기도 함

const action_type= { // action도 객체로 정의 
 
  deposite:'deposit',
  withdraw : 'withdraw'
};

const reducer = (state, action) =>{ // 함수의 이름은 바뀌어도 됨; state와 action을 가지고 함수를 정의
  // 어떤것을 어떻게 바꿀지 다르기 때문에 switch 문을 이욯
  // action은 객체 타입으로 가져옴 (action은 type과 payload를 가진 객체)
   //action ==>{type : 'deposit', payload : 10000}로 생김

   //action.type이 action_type.deposite(즉, action.type===deposit이면) 이라면 action.palyload를 해주겠다는 것
   //reducer는 기존의 state를 가져와 갱신한 다음 갱신한 state를 다시 return하는 형태의 함수로 가져야 함 
   // state를 변경하지 않아도 되는 나머지의 모든 값들도 리턴해 주어야 하기 때문에 defaul: 를 통해 나머지도 모두 return 진행
  switch(action.type){ // (1)여기의 이름과 dispatche에서 호출할 때의 action의 key와 동일하기만 하면 명칭은 달라도 됨
    case action_type.deposite : return + state + +action.payload;
    case action_type.withdraw : return + state - +action.payload;
    // 자바스크립트에서는 문자 100과 숫자200이 300이 되는 것이 아닌 100200으로 나옴
    // 따라서 문자 100을 숫자로 바꾼다는 의미는 앞에 + 연산자를 붙이면 숫자로 바꾼다는 의미
    // 따라서 문자에 -를 붙이면 부호를 바꿈과 동시에 숫자로 만들어주기 때문에 - +(문자100)을 쓸 필요 없이 -(문자)로 써도 무방
    // + 연산은 문자열을 이어주는 역할로 오버로딩 되어있음 하지만 -는 그렇지 않기 때문에 강제 형변환을 시켜줌.
    // 하지만 +는 아니기 떄문에 숫다로 바꾼 다음에 + 연산을 하여 숫자로 바꾼 후 다시 +를 해줘야 숫자끼리의 합이 됨
    default: return + state;
  }
}

function App() {
  const [money, setMoney] = useState(0);
  const [balance, dispatche] = useReducer(reducer, 0); // 잔액, 실제 실행할 함수와, action을 가지고 넘어감
  // 실제 reducer를 사용할 함수와 state의 초기값을 가지고 넘어감
  // 입금 버튼을 누르면 dispatche를 호출 (요청하는 것이기 때문)

  return (
    <div className="App">
      <h2>useReducer 은행</h2>
      <p>잔액 : {balance}</p>
      <input type="number" value={money} onInput={(e) => setMoney(e.target.value)} step="1000"/>
      {/*버튼을 클릭할 때 dispatche를 호출하면서 파라미터로 action(type, payload)(1)를 가지고 넘어감*/}
      <button onClick={()=>dispatche({type:'deposit', payload:money})}>입금 </button>
      <button onClick={()=>dispatche({type:'withdraw', payload:money})}>출금 </button>

      <br/><br/><br/>

      <Counter initialCount={0}/>
    </div>
  );
}

export default App;
