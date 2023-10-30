import { useState } from "react";
import Component2 from './Component2';

// Component1에서의 데이터를 Component5로 가져가 데이터 변경 및 출력
const Component1 = () => {
    const[user, setUser] = useState("Jesse Hall");
    return(
        <>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user = {user} setUser={setUser}/>
        </>
    )
}

export default Component1;