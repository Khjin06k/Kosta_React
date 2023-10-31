import {combineReducers} from 'redux';
import { addsubReducer } from './Addsub';
import { countingReducer } from './counting';


// 2개의 reducer를 가져와 combineReducers를 이용해 묶음
export const rootReducer = combineReducers({
    value:addsubReducer,
    count:countingReducer
})
