import { useReducer, useState } from 'react';
import './App.css';
import {initState, reducer} from './MyReducer';
import MyNickname from './MyNickname';

function App() {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');
  const [info, dispatch] = useReducer(reducer, initState); // initState라는 초깃값을 가져와 그것을 info에 넣어줌
  return (
    <div className="App">
      <label>{info.id}</label> &nbsp;&nbsp;&nbsp;
      <input type='text' value={id} onInput={(e)=>setId(e.target.value)}/>
      <button onClick={()=>dispatch({type:"ID", change:id})}>아이디 변경</button><br/>

      {/*<label>{info.nickname}</label> &nbsp;&nbsp;&nbsp;
      <input type='text' value={nickname} onInput={(e)=>setNickname(e.target.value)}/>
  <button onClick={()=>dispatch({type:"NICKNAME", change:nickname})}>닉네임 변경</button><br/>*/}
      <MyNickname info={info} dispatch={dispatch}/>
      {/* 닉네임 부분만 따로 빼야하는 경우 임폴트하여 const [info, dispatche]를 가져 가는 것으로는 사용이 불가능하다 
      따라서 props로 해당 info와 dispatch함수를 가지고 넘어가야 사용이 가능*/}

      <label>{info.subject}</label> &nbsp;&nbsp;&nbsp;
      <input type='text' value={subject} onInput={(e)=>setSubject(e.target.value)}/>
      <button onClick={()=>dispatch({type:"SUBJECT", change:subject})}>전공 변경</button><br/>

      <label>{info.grade}</label> &nbsp;&nbsp;&nbsp;
      <input type='text' value={grade} onInput={(e)=>setGrade(e.target.value)}/>
      <button onClick={()=>dispatch({type:"GRADE", change:grade})}>학년 변경</button>
    </div>
  );
}

export default App;
