import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  /* const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div className="App">
      이름 : <input type="text" onChange={(e) => setName(e.target.value)} /><br/>
      나이 : <input type="text" onChange={(e) => setAge(e.target.value)} /><br/>
      주소 : <input type="text" onChange={(e) => setAddress(e.target.value)} /><br/><br/>
        <table border="1">
          <tbody>
            <tr><th>이름</th><th>나이</th><th>주소</th></tr>
            <tr><th>{name}</th><th>{age}</th><th>{address}</th></tr>
          </tbody>
        </table>
    </div>
  );*/

  // 변수를 각각 잡는 것이 아닌 하나로 잡아서 변경
  // 처음에는 초기값 ''로 설정
  const[user, setUser] = useState({name:'', age:'', address:'', tel:''});
  const change = (e) => { // 이벤트가 발생될 경우 변경된 것이 있다면 호출 진행
    let name = e.target.name;
    let value = e.target.value;
    setUser({...user, [name] : value});
  } // 객체 전개 연산자를 사용하여 변경된 내용만 덮어쓸 수 있도록 함
  // 객체의 경우에는 ...을 이용한 객체 전개 연산자를 많이 이용
  // key와 관련된 것은 대괄호에 작성(문자열이 아니라 그 자체를 가져오도록 함)
  // 일괄 처리가 가능

  return (
    <div className="App">
      이름 : <input type="text" name="name" onChange={change} /><br/>
      나이 : <input type="text" name="age" onChange={change}/><br/>
      주소 : <input type="text" name="address" onChange={change}/><br/>
      전화 : <input type="text" name="tel" onChange={change}/><br/><br/>
        <table border="1">
          <tbody>
            <tr><th>이름</th><th>나이</th><th>주소</th><th>전화번호</th></tr>
            <tr><th>{user.name}</th><th>{user.age}</th><th>{user.address}</th><th>{user.tel}</th></tr>
          </tbody>
        </table>
    </div>
  );
}

export default App;
