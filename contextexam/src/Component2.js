import Component3 from './Component3';

// Component1으로부터 받은 user을 가지고 와서 사용
const Component2 = ({user,setUser}) => {
    return(
        <>
            <h1>Conponent2</h1>
            {/* Component3에 user 전달 */}
            <Component3 user = {user} setUser={setUser}/>
        </>
    )
}

export default Component2;