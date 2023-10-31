export const initState = {
    id:'hong',
    nickname:'gildong',
    subject:'computer',
    grade:1
}

// state를 가져와 action에서 정의한 대로 변경하기 때문에 return을 할 때 state를 가져와 id가 action의 id로 변경한다는 의미
// 즉. dispatch({type:"ID", change:id})}인 경우 type이 "ID"인 것을 찾아서 action의 change인 것을 id로 변경하겠다는 의미가 됨
// 추가하자면 dispatch가 action의 값을 가지고 useReducer를 호출하는 함수이기 때문에
// dispatch에서 type:"ID" 부분이 action의 Type을 말하고 id:change 부분이 action에서 변경할 값을 의미함 (둘 다 action을 의미)

export const reducer = (state, action) => {
    switch(action.type){
        case "ID":return{...state, id:action.change}; break;
        // case "ID": newState = {...state, id:action.change}; break; 로 작성하여 마지막에 return newState;로 한 번에 리턴도 가능

        case "NICKNAME":return{...state, nickname:action.change}; break;

        case "SUBJECT":
            return{...state, subject:action.change}; break;
            
        case "GRADE":
            return{...state, grade:action.change}; break;

        default: return state;
    }
}
