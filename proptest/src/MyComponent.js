// import React, {Component} from 'react'; // function형의 경우 extends를 하지 않아도 됙기 때문에 import를 쓰지 않아도 됨

//class MyComponent extends Component{
//    render(){
 //       let {name, age} = this.props.info; 
        // 객체를 가져와 분리해서 각각 담는 방법이 존재함
        // javascripttest.js 파일 참고

        //return (
        //    <div>
                {/*<h1>{this.props.name} </h1>
                <h1> {this.props.age} </h1>*/}

                {/*<h1> {this.props.info.name} </h1>
                <h1> {this.props.info.age} </h1>*/}

        //        <h1> {name} </h1>
        //        <h1> {age} </h1>

        //    </div>
        //) // this의 props는 부모로부터 가져온 것. 즉 APP로 부터 가지고 온다는 것.
        // 자바 스크립트에서 중괄호로 작성
        
        //객체로 가져올 때에는 객체의 이름을 넣어서 호출함

        // 태그 아래에서 변수를 사용할 때에는 중괄호를 사용함
   // }
    
//}

// function형 

/*function MyComponent(props){
    let {name, age} = props.info;

    return ( // 리액트에서 최종 리턴에서 주는 태그는 하나로 묶여 있어야 함 (마지막에 하나로 감싼 div가 없을 경우 엥러 발생)
        <div>
            <h1> {name} </h1>
            <h1> {age} </h1>
        </div>
    )
}*/

// 함수형일 경우 props를 생략하고 아래와 같이 사용하며, 아래와 같은 방식을 많이 사용함
function MyComponent({name, age}){

    return ( // 리액트에서 최종 리턴에서 주는 태그는 하나로 묶여 있어야 함 (마지막에 하나로 감싼 div가 없을 경우 엥러 발생)
        <div>
            <h1> {name} </h1>
            <h1> {age} </h1>
        </div>
    )
}

export default MyComponent;