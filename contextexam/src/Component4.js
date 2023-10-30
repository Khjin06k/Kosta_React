import Component5 from './Component5';

// Component3으로부터 받은 user을 가지고 와서 사용
const Component4 = ({user, setUser}) => {
    return(
        <>
            <h1>Conponent4</h1>
            {/* Componen5에 user 전달 */}
            <Component5 user = {user} setUser={setUser}/>
        </>
    )
}

export default Component4;