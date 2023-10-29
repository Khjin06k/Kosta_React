import {useState} from 'react';
// State를 사용하기 때문에 import를 해야 함
// {}로 임ㅗㄹ트 하는 이유는 객체 형태로 export 하기 때문

function FStateComp(){
    const [stateString, setStateString] = useState('react'); //const[변수, 변수를 변경하는 함수]로 작성
    const [stateNumber, setStateNumber] = useState(501);
    return (
        <>
            <button onClick={() => setStateString('리액트')}>state String 변경</button> <br/>
            <button onClick={() => setStateNumber(502)}>state Number 변경</button> <br/>
            StateString : {stateString} <br/>
            StateNumber : {stateNumber}
        </>
    )
}
export default FStateComp;