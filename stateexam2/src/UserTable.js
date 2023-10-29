import {useState} from 'react';
import UserAdd from './UserAdd';

function UserTable(){
    const [userList, setUserList] = useState([]);

    return (
        <div className="App">
            {/* 자식에게 부모의 리스트와 setter 함수를 함께 넘겨줌 */}
            <UserAdd userList={userList} setUserList={setUserList}/>
            
            {userList.length>0 && <table border="1"> 
              <tbody>
                <tr><th>이름</th><th>나이</th><th>주소</th><th>전화번호</th></tr>
                {userList.map((item) =>
                    (
                     <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.address}</td>
                        <td>{item.tel}</td>
                     </tr>   
                    )
                )}
              </tbody>
            </table>}
        </div>
    );
}

export default UserTable;