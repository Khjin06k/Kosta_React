import { useState } from 'react';
import {Card, Input, Button, Label, Col, InputGroup, InputGroupAddon, Form} from 'reactstrap';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

// 파일 첨부 리셋 관련 수정 필요
// BoardList 및 BoardDetail과 board 리스트 연결하는 로직 추가 필요
const Register = () =>{
    const[board, setBoard] = useState({writer:'', title:'', content:'', picture:""});
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [picture, setPicture] = useState("");

    const change = (e) => { 
        let name = e.target.name;
        let value = '';
        if(name==='picture'){
            value=e.target.file[0];
        } else{
            value = e.target.value;
        }
        setBoard({...board, [name] : value});
    }

    const reset = (e) =>{
        setBoard({writer:'', title:'', content:'', picture:""});
        setPicture("");
    }

    const registerCheck = (e) =>{
        Swal.fire({
            title : "등록되었습니다",
            icon : "success",
            showConfirmButton : false,
            timer : 3000
        })

        const toList = () =>{
            window.location.href="/boardList";
        }

        setTimeout(toList, 3000);
    }
    
    return(
        <div style={{marginTop:"100px"}}>
            <h3 style={{fontWeight:"800"}}> 게시판 글 등록 </h3>
            <Card body style={{width:"700px", margin:"40px auto"}}>
                <Form>
                <InputGroup row={true.toString()} style={{ marginBottom: "20px" }}>
                        <Label sm="3">
                            글쓴이
                        </Label>
                        <Input sm="9" type='text' value={board.writer} name="writer" onChange={change}/>
                    </InputGroup>
                    <InputGroup row={true.toString()} style={{ marginBottom: "20px" }}>
                        <Label sm="3">
                            제목
                        </Label>
                        <Input sm="9" type='text' value={board.title} name="title" onChange={change}/>
                    </InputGroup>
                    <InputGroup row={true.toString()} style={{ marginBottom: "20px" }}>
                        <Label sm="3">
                            내용
                        </Label>
                        <Input sm="9" type='textarea' value={board.content} style={{height:"300px"}} name="content" onChange={change}/>
                    </InputGroup>
                    <InputGroup row={true.toString()} style={{ marginBottom: "20px" }}>
                        <Label sm="3">
                            이미지 파일 첨부
                        </Label>
                        <Col sm="9">
                            <Input type='file' name="picture" value={board.picture}/>
                        </Col>
                    </InputGroup>
                    <Button color='success' onClick={registerCheck}> 등록 </Button> &nbsp;
                    <Button color='success' onClick={reset}>다시쓰기</Button>
                    </Form>
            </Card>
        </div>
    )
}

export default Register;