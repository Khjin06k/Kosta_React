import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Page2 = () => {
    const data2 = useSelector(state=>state.data2);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{data2}</h2>
            <button onClick={()=>dispatch({type:"INT", data:100})}>숫자 변경</button>
        </div>
    );
};

export default Page2;