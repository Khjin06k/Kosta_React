import Component4 from './Component4';

// Component2으로부터 받은 user을 가지고 와서 사용
const Component3 = ({user, setUser}) => {
    return(
        <>
            <h1>Conponent3</h1>
            {/* Componen4에 user 전달 */}
            <Component4 user = {user} setUser={setUser}/>
        </>
    )
}

export default Component3;