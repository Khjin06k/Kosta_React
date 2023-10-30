import { useContext } from "react"; // 사용하기 위해 UseContext를 가져온다는 의미 (사용하는 곳에서 임폴트)
import { UserContext } from "./ContextEx1"; // ContextEx1에 있는 UserContext를 가지고 온다는 의미


const ContextEx5 = () =>{
    const context = useContext(UserContext); 
    // UserContext를 가져와 사용하기 위해 useContext를 사용해 context에 UserContext.Provider로 가져온 value를 넣음

   return(
    // context에 데이터를 담았기 때문에 context. 으로 안의 객체를 가져와서 사용
        <>
            <h1>ContextEx5</h1>
            <h2>{`Hello ${context.user}`}</h2>
            <input type="text" onChange={(e)=>context.setUser(e.target.value)}/>
        </>
    )
}

export default ContextEx5;