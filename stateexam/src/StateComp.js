import React, {Component} from 'react';

class StateComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            stateString : 'react',
            stateNumber : 501
        }
    } // class 형에는 this가 붙지만 function형에는 this가 붙지 않음

    stringChange = () =>{
        // state의 setState 는 이미 있는 함수
        this.setState({stateString:'리액트'});

        // this.state.stateString = '리액트'; // setState가 아니면 바뀌지 않음
    }

    numberChange = () =>{
        // state의 setState 는 이미 있는 함수
        this.setState({stateNumber:502});
    }

    render(){
        return(
            // onClick의 경우 함수를 호출시켜주는 것이 아닌 함수 이름을 매칭해 주는 것
            // 따라서 익명함수를 호출하는 () => {this.stringChange()}도 가능하지만 this.stringChange도 가능함
            // 파라미터를 넘겨줘야 할 때에는 익명 함수를 호출하는 방식을 사용
            // html은 호출시켜주는 코드이기 때문에 () => 형태로 호출시켜주어야 함
            <>
                <button onClick={this.stringChange}>state String 변경</button> <br/>
                <button onClick={this.numberChange}>state Number 변경</button> <br/>
                StateString : {this.state.stateString} <br/>
                StateNumber : {this.state.stateNumber}

            </>
        )
    }
}

export default StateComp;