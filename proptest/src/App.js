import './App.css';
import MyComponent from './MyComponent';
import PropsBoolean from './PropsBoolean';
import PropsDataType from './PropsDataType';
import PropsRequired from './PropsRequired';
import PropsNode from './PropsNode';

// function형 컴포넌트
function App() {
  return (
    <div className="App">
      {/*<MyComponent name="hong" age="20"/>*/}
      <MyComponent info={{name:"song", age:"20"}} />
      {/*<MyComponent name="hong" age={20}/>*/}

      <PropsDataType
      /* 각 각 띄어쓰기 혹은 줄바꿈으로 분리해야 사용해줘야 함. 아래는 전부 줄바꿈 진행 */
        String="react"
        Number={501}
        Boolean={1==1} /* true를 넘기는 것 */
        Array={[1,2,3]}
        ObjectJson={{react:'리액트', version:501}}
        function={console.log("FunctionProps:function!")}
      />

      <PropsBoolean 
        BooleanTrueFalse = {false}
      />
      <PropsBoolean BooleanTrueFalse /*값을 넣어주지 않고(어떤 타입인지 알 수 없음) 이름만 보낼 경우 >> boolean 타입의 true로 인식*//> 
    
      <PropsRequired ReactVersion={501}/> <br/>

      <PropsNode>
        <span> node from App.js</span>
      </PropsNode>
    </div>
  ); // 부모에서 자식으로 값을 넘겨주고 싶다면 props로 값을 주면 되는 것

  // 위에처럼 각각을 보내줘도 괜찮지만 객체로서 넘겨줘도 괜찮음 (전달해야 하는 데이터가 많을 경우에는 객체로 싸써 넘겨줌)

  // 자바스크립트 객체 변수를 사용할 떄에는 중괄호를 써야 함. 객체 값을 넣을 때 문자열로 넘겨주거나 자바스크립트로 넘겨줘야 함. (중괄호를 쓰지 않고 근야 20만 쓸 경우 에러 발생)
}

export default App;
