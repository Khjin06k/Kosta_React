import dataType from 'prop-types';

function PropsDataType(props){
    let {String, Number, Boolean, Array, ObjectJson, Function} = props;

    // 각 타입을 가져와서 출력 진행
    return(
        <>
            <p>StringProps : {String}</p>
            <p>NumberProps : {Number}</p>
            <p>BooleanProps : {Boolean.toString()}</p>
            <p>ArrayProps : {Array.toString()}</p>
            <p>ObjectJsonProps : {JSON.stringify(ObjectJson)}</p>
            <p>FunctionProps : {Function}</p>
        </>
    )
}

// 알아서 타입을 지정해서 가져오기는 하지만 얽혀 있는 경우
// 특정 데이터 타입의 경우 인식이 안될 수 있기 때문에
// 위에 임폴트문을 작성해 dataType을 사용하여 명식적으로 데이터 타입을 지정해줌
PropsDataType.propTypes = {
    String:dataType.string,
    Number:dataType.number,
    Boolean:dataType.bool,
    Array:dataType.array,
    ObjectJson:dataType.object,
    function:dataType.func
}

// 분리하고 나서 임폴트 해서 사용하고 싶을 경우 반드시 export를 해야 사용이 가능함
// export를 하지 않으면 외부에서 import가 불가능함
// export default는 하나만 있어야 함
// 안에서 컴포넌트에서 컴포넌트를 사용할 경우에는 하나의 js 파일에 여러개 사용 가능함
export default PropsDataType; 
