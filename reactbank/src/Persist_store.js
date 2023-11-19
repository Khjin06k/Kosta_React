import storage from "redux-persist/lib/storage/session"; // localStorage에 저장
//import storageSession from "redux-persist/lib/storage.session"; // sessionStorage에 저장
// reduxStorage / configStorage에서 사용하는 store의 경우 redux의 storage  페이지를 새로고침하면 state가 사라지기 때문에 사용하지 않음

import {persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';

const reducer=(currentState, action) =>{

    // 사용자 정보가 없을 경우에 지정할 초기값
    if(currentState===undefined){
        return({
            id:"",
            name:"",
            password:"",
            email:"",
            address:""
        })
    }
    const newState = {...currentState};

    // 타입에 따른 페이로드 지정
    switch(action.type) {
        case "ID": newState.id=action.payload; break;//return {...currentState, id:action.payload};
        case "NAME": newState.name=action.payload; break; //return {...currentState, name:action.payload};
        case "PASSWORD": newState.password=action.payload; break; //return {...currentState, password:action.payload};
        case "EMAIL": newState.email=action.payload; break; //return {...currentState, email:action.payload};
        case "ADDRESS": newState.address=action.payload; break; //return {...currentState, address:action.payload};s
        case "ALL":
            newState.id=action.payload.id;
            newState.password=action.payload.password;
            newState.email=action.payload.email;
            newState.name=action.payload.name;
            newState.address=action.payload.address;
            break;
        default: 
    }
    return newState;
}

const persistConfig = { // key가 root인 것은 정해져 있는 것으로 변경 X
    key: 'root',
    storage
}

// 임폴트 받은 persisConfig를 이용해서 persistReducer를 만든 것으로 내가 만든 persisConfig가 아님
// 그냥 persistConfig만을 가져가는 것이 아닌 storage와 key를 모두 가져간다는 것을 말함
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({reducer:persistedReducer,
    // storage를 사용하지 않으면 쓰지 않아도 되지만, storage를 사용할 경우 쓰지 않으면 에러가 발생함
    // true로 되어있으면 에러가 발생함
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck:false,
        })
    });


export default store;