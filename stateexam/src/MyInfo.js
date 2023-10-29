import {useState} from 'react'; // userState는 react에서 기본적으로 제공

function MyInfo(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    return(
        // e.target.value는 사용자가 입력해준 값을 의미
        <>
            이름 입력 : <input type="text" onChange={(e) => setName(e.target.value)}/><br/>
            나이 입력 : <input type="text" onChange={(e) => setAge(e.target.value)}/><br/>
            주소 입력 : <input type="text"onChange={(e) => setAddress(e.target.value)}/><br/>
            데이터 : {name}, {age}, {address}
        </>
    )
}

export default MyInfo;