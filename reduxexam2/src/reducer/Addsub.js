import React from 'react';

const initState = {
    value : 0
}

// state=initState  를 이용하여 아예 default 값 지정
// export 했기 때문에 다른 곳에서 import로 가져다가 사용이 가능
// default로 가져가는 것이 아니기에 중괄호로 감싸서 임폴트해 줘야 함
export const addsubReducer = (state=initState, action) =>{

    // state에 값이 value 하나밖에 없기 때문에 ...을 쓰지 않아도 됨
    switch(action.type){
        case 'INCREMENT' : return {...state, value:state.value+1}
        case 'DECREMENT' : return {...state, value:state.value-1}
        case 'RESET' : return {...state, value:0}
        default: return state
    }
}