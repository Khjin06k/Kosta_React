import {initTodos, reducer} from './MyReducer';
import {useReducer } from 'react';

const ReducerEx1 = () =>{
    const [todos, dispatch] = useReducer(reducer, initTodos); //initTodos를 초기값으로 todos를 하나 생성

    return(
        <>  {/* 반복적인 부분을 출력하는 경우 key 속성을 넣어야 warning이 남
            key 속성을 서로 다른 값으로 가지고 있지 않으면 인식을 잘 하지 못해 어그러짐
            데이터를 태그의 반복적인 패턴으로 묶는 경우 데이터에 key를 설정
            유일한 데이터를 특정 태그의 key 값으로 지정해 줌 
            반복되는 태그의 맨 밖에 설정해 주어야 함*/}
            {todos.map((todo) =>
                
                <div key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.complete} 
                            onChange={()=>dispatch({type:'COMPLETE', id:todo.id})}/>
                            {todo.title} &nbsp;&nbsp;&nbsp;
                            {todo.count} &nbsp;&nbsp;&nbsp;
                            <button onClick={()=>dispatch({type:'INCREMENT', id:todo.id})}>+</button>
                    </label>
                </div>
            )}
        </>
    )
}

export default ReducerEx1;