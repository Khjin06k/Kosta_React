import {useState} from 'react';

// 부모에게 받은 리스트와 setter 함수를 이용해 버튼 클릭 시 set 되도록 지정
function UserAdd({userList, setUserList}){
    const[user, setUser] = useState({name:'', age:'', address:'', tel:''});
    
    const change = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setUser({...user, [name] : value});
    }

    const addUser = () =>{
        setUserList([...userList, user]);
        setUser({name:'', age:'', address:'', tel:''});
    }
    
    return(
        <>
            이름 : <input type="text" name="name" value={user.name} onChange={change} /><br/>
            나이 : <input type="text" name="age" value={user.age} onChange={change}/><br/>
            주소 : <input type="text" name="address" value={user.address} onChange={change}/><br/>
            전화 : <input type="text" name="tel" value={user.tel} onChange={change}/><br/><br/>

            <button onClick={addUser}>추가</button><br/><br/>
        </>
    )
}

export default UserAdd;