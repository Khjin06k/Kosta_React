import ContextEx2 from "./ContextEx2";
import { useState, createContext } from "react";
export const UserContext = createContext(); // 외부에서 사용 가능하도록 export

const ContextEx1 = () =>{
    const [user, setUser] = useState("Jesse Halll");

    // key, vlaue의 객체를 담아서 conetext를 만듦 (공유해야 하는 것을 묶어서 UserContext를 이용해서 넘김)
    // 즉, 공유할 데이터를 객체에 담음
    // key와 value가 동일하다면 하나만 작성해줘도 됨
    // 함수의 경우에는 bind를 많이 시킴
    const context = {
        user,
        setUser:setUser.bind(this)
    }
    return (
        // UserContext를 이용해서 context를 넘겼다면, 이를 Context에 담아서 넘겼다면, 
         //   ContextEx2이하의 모든 컴포넌트와 ContextEx2의 컴포넌트는 context를 가져와 사용이 가능함
         // ContextEx3 ~ 5가 모두 ContextEx2 >> 3>>4>>5로 연결되기 때문에 모두 Context2의 하위 자식 컴포넌트가 되므로 UserContext를 사용 가능
        <UserContext.Provider value={context}>
            <h1>{`Hello ${context.user}`}</h1>
            <ContextEx2/>
        </UserContext.Provider>
    )
}

export default ContextEx1;