import {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import {useDispatch} from 'react-redux'; // 리덕스에서 설정한 값을 가져오기 위해 임폴트 

const Login = () => {
    const formStyle = {width:'500px', margin:'20px auto', border:'1px solid lightgray', padding:'30px', borderRadius:'7px'}
    const initLogin={id:'', password:''};
    const [login, setLogin] = useState(initLogin);
    const changeInput = (e) => {
        setLogin({...login, [e.target.name]:e.target.value});
    }

    const dispatch = useDispatch(); // 리덕스에서 dispatch를 가져와 사용하기 위해 선언

    const submit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/login", login) // {id:id, password:password} 로 따로따로 보내줘도 됨 (만약 위에서 const를 따로따로 했다면)
        .then(res=>{
            console.log(res.data);
            dispatch({type:"ALL", payload:res.data}); // 사용자의 모든 정보를 바꿔야 하기 때문에 type을 All로 해서 변경
            window.location.href="/";
        })
        .catch(err=>{
            console.log(err.data);
        })
    }

    return (
        <Form style={formStyle}>
            <h4 style={{textAlign:'center'}}>로그인</h4><br/>
            <FormGroup row>
                <Label for="id" sm={3}>아이디</Label>
                <Col sm={9}>
                    <Input type="text" name="id" id="id" onChange={changeInput}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="password" sm={3}>패스워드</Label>
                <Col sm={9}>
                    <Input type="text" name="password" id="password" onChange={changeInput}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={12}>
                <Button color="primary" style={{width:"100%"}} onClick={submit}>로그인</Button>
                </Col>
            </FormGroup>
        </Form>
    )
}

export default Login;