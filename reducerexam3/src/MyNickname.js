import { useState } from "react";
const MyNickname = ({info, dispatch}) =>{
    const [nickname, setNickname] = useState('');

    return(
        <>
            <label>{info.nickname}</label> &nbsp;&nbsp;&nbsp;
            <input type='text' value={nickname} onInput={(e)=>setNickname(e.target.value)}/>
            <button onClick={()=>dispatch({type:"NICKNAME", change:nickname})}>닉네임 변경</button><br/>
        </>
    )
}

export default MyNickname;