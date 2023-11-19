import { useState, useRef } from 'react';
import {Card, Input, Button, Label, Col, InputGroup, Form} from 'reactstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// 파일 첨부 리셋 관련 수정 필요
// BoardList 및 BoardDetail과 board 리스트 연결하는 로직 추가 필요
const Register = () =>{
    const[board, setBoard] = useState({title:'', content:'', writer:''});
    const [files, setFiles] = useState([]); // 여러개의 파일을 추가하기 위해 배열로 작성
    const imgBoxRef = useRef();
    const navigate = useNavigate();

    const change = (e) => { 
        let name = e.target.name;
        let value = e.target.value;
        
        setBoard({...board, [name] : value});
    }

    const fileChange = (e) =>{
        if(e.target.files.length>0){ // 파일을 선택하지 않아도 이벤트가 발생을 하기 때문에 빈 파일일 때에는 실행되지 않도록 조건문 설정
                    setFiles([...files, e.target.files[0]]); // 파일을 추가할 때마다 배열에 추가
        }

        //const imageSrc = URL.createObjectURL(e.target.files[0]);
        //imgBoxRef.current.src = imageSrc;
    }

    const reset = (e) =>{
        setBoard({writer:'', title:'', content:'', files:""});
        setFiles("");
    }

    const registerCheck = (e) =>{
        e.preventDefault();
        Swal.fire({
            title : "등록되었습니다",
            icon : "success",
            showConfirmButton : false,
            timer : 3000
        })
            const formData = new FormData();
            formData.append("title", board.title);
            formData.append("content", board.content);
            formData.append("writer", board.writer);
            for(let file of files){
                formData.append("file", file);
            }
            
            axios.post("http://localhost:8080/register", formData)
            .then(res=>{
                console.log(res.data);
                navigate(`/boardDetail/${res.data}`); 
            })
            .catch(err=>{
                console.log(err.data);
            })
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
                        <Input sm="9" type='text' name="writer" onChange={change}/>
                    </InputGroup>
                    <InputGroup row={true.toString()} style={{ marginBottom: "20px" }}>
                        <Label sm="3">
                            제목
                        </Label>
                        <Input sm="9" type='text'  name="title" onChange={change}/>
                    </InputGroup>
                    <InputGroup row={true.toString()} style={{ marginBottom: "20px" }}>
                        <Label sm="3">
                            내용
                        </Label>
                        <Input sm="9" type='textarea'  style={{height:"300px"}} name="content" onChange={change}/>
                    </InputGroup>
                    <InputGroup row={true.toString()} style={{ marginBottom: "20px" }}>
                        <Label sm="3">
                            이미지 파일 첨부
                        </Label>
                        <Col sm="9">
                            <img src="images.png" width="100px" height="100px" id="image-box" alt='' ref={imgBoxRef}
                            onClick={()=>document.getElementById("file").click()}/>
                            <Input hidden type='file' name="file" id="file" accept="upload/*" onChange={fileChange}/>
                            {
                                files.length !== 0 &&
                                files.map((file, index)=>
                                <span key={index}>
                                    <img src={URL.createObjectURL(file)} width="100px" height="100px" alt='' style={{marginRight:"10px"}}/>
                                    {index % 3 ===0 ? <><br/><br/></> : ""} 
                                </span>)
                            }
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