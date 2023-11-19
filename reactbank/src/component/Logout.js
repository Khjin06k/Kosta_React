import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {persister} from '../App';

const Logout = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch({type:"ALL", payload:{id:'',name:'',password:'',email:'',address:''}});
        persister.purge(); // App에서 임폴트 받은 것을 사용
        window.location.href="/login";
    }, [])
}

export default Logout;