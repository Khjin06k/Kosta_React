export const initTodos = [
    {
        id:1,
        title:'Todo1',
        count : 0,
        complete:false
    },
    {
        id:12,
        title:'Todo2',
        count : 0,
        complete:true
    },
    {
        id:3,
        title:'Todo3',
        count : 0,
        complete:false
    }
]

// action 타입을 따로 만들지 않고 바로 작성하기도 함
export const reducer = (state,action) =>{
    switch(action.type){
        case "COMPLETE" : 
        // 현재는 초기 state가 initTodos로 배열로 설정을 해둠 >> state는 객체 배열이 됨
        // 힝상 state가 객체나 배열일 때에는 변경만 하는 것이 아니라 state 자체를 새로 만들어서 리턴해줘야 함
        return(
            // 자바스크립트에서 map은 배열의 메서드
            // state는 배열이기 대문에 .map으로 가져옴 (map은 하나하나의 요소를 변경시켜서 사용할 때 사용함)
            // complete와 count를 변경하기 위해서 action의 타입에는 complete나 count를 가져올 것
            // 위에서 case " COMPELETE"를 가져왔기 때문에 complete를 가져와 리턴하는데 이를 complete만 리턴해주는 것이 아닌 배열을 줘야 함
            // 따라서 ...todo의 객체를 가져오는데 해당하는 todo의 complete를 변경한 다음 todo를 리턴함
            // 즉, 배열 그대로를 가져와서 파라미터를 가지고 비교해서 동일한 객체들을 변경한 다음 해당 객체 자체 state 자체를 리턴
            state.map(todo =>{
                if(todo.id===action.id){ // 파라미터가 같은것만 바꿔서 리턴
                    // 객체 전개 연산자를 이용해서 complete
                    return {...todo, complete:!todo.complete} // id가 동일하면 complete를 변경한 다음 해당 객체를 반환함
                }else return{...todo} // id가 다른것들은 그냥 그 객체 자체를 반환
            }) // 전체적으로 각각의 객체들을 return함
        )
        
        case "INCREMENT" : // count를 증가
        return(
            state.map(todo =>{
                if(todo.id===action.id){ 
                    return {...todo, count:todo.count + 1}
                }else return{...todo}
            })
        )
        default: return state;
    }
}