// App에 있는 태그 자체를 자식이 받아올 수 있음을 보여줌
function PropsNode(props){
    return(
        <>
            <h1> 태그 시작 </h1>
            {props.children}
            <h1> 태그 끝 </h1>
        </>
    )
}

export default PropsNode;