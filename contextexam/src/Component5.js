// Component4으로부터 받은 user을 가지고 와서 사용
const Component5 = ({user, setUser}) => {
    return(
        <>
            <h1>Conponent5 </h1>
            <h2>{`Hello ${user} again`}</h2>

            <input type='text' onChange={(e) => setUser(e.target.value)}/>
        </>
    )
}
//
export default Component5;