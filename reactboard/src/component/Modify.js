import { useState, useRef, useEffect } from 'react';
import {Card, Input, Button, Label, Col, InputGroup, Form} from 'reactstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';



// 파일 첨부 리셋 관련 수정 필요
// BoardList 및 BoardDetail과 board 리스트 연결하는 로직 추가 필요
const Modify = () =>{
    const [board, setBoard] = useState({num:null, writer:'', content:'', fileurl:''});
    const [files, setFiles] = useState([]); // 여러개의 파일을 추가하기 위해 배열로 작성
    const imgBoxRef = useRef();
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    const {num} = useParams();

    useEffect(
        ()=>{
            axios.get(`http://localhost:8080/boardDetail/${num}`)
            .then(res=>{
               console.log(res.data);
               let reboard = res.data;
               setBoard(reboard);
               let fileurl = res.data.fileurl;
                let filenums = fileurl.split(',');
                setImages([...filenums]);
            })
            .catch(err=>{
                console.log(err.data);
                 // Check if there is a response object in the error
                 if (err.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('Server responded with status:', err.response.status);
                    console.log('Error details:', err.response.data);
                } else if (err.request) {
                    // The request was made but no response was received
                    console.log('No response received. Request details:', err.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', err.message);
                }
            })
        }
    ,[num])

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
        setFiles([]);
    }

    const modifyCheck = (e) =>{
        e.preventDefault();
        Swal.fire({
            title : "수정되었습니다",
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
            

            axios.put(`http://localhost:8080/modify`, formData)
            .then(res=>{
                console.log(res.data);
                navigate(`/boardDetail/${board.num}`); 
            })
            .catch(err=>{
                // Check if there is a response object in the error
                if (err.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('Server responded with status:', err.response.status);
                    console.log('Error details:', err.response.data);
                } else if (err.request) {
                    // The request was made but no response was received
                    console.log('No response received. Request details:', err.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', err.message);
                }
           })
    }

    const cancelImage = (number) =>{
        let imagelist = images.filter(image=>image.num !== number); // 해당 보드 번호를 가진 것을 목록에서 삭제 후 재저장함
        setImages([...imagelist]);
    }
    
    return(
        <div style={{marginTop:"100px"}}>
            <h3 style={{fontWeight:"800"}}> 게시판 글 수정 </h3>
            <Card body style={{width:"700px", margin:"40px auto"}}>
                <Form>
                <InputGroup row={true.toString()} style={{ marginBottom: "20px" }}>
                        <Label sm="3">
                            글쓴이
                        </Label>
                        <Input sm="9" type='text' name="writer" value={board.writer} disabled/>
                    </InputGroup>
                    <InputGroup row={true.toString()} style={{ marginBottom: "20px" }}>
                        <Label sm="3">
                            제목
                        </Label>
                        <Input sm="9" type='text'  name="title"  value={board.title} onChange={change}/>
                    </InputGroup>
                    <InputGroup row={true.toString()} style={{ marginBottom: "20px" }}>
                        <Label sm="3">
                            내용
                        </Label>
                        <Input sm="9" type='textarea'  style={{height:"300px"}} name="content"  value={board.content} onChange={change}/>
                    </InputGroup>
                    <InputGroup row={true.toString()} style={{ marginBottom: "20px" }}>
                        <Label sm="3">
                            이미지 파일 첨부
                        </Label>
                        <Col sm="9">
                        <img src="./logo192.png"  width="100px" height="100px" alt='' ref={imgBoxRef} 
                                    onClick={()=>document.getElementById("file").click()}/><br/><br/>
                                <Input name="file" type="file" id="file" accept="image/*" onChange={fileChange} hidden/>
                                {images.length!==0 &&
                                    images.map(num => 
                                        <img key={num} src={`http://localhost:8080/image/${num}`} width="100px" alt='' onClick={()=>cancelImage(num)} style={{marginRight:"10px"}}/>
                                    )
                                }
                                {
                                    files.length!==0 &&
                                    files.map((file, index)=>
                                        <span key={index}>
                                        <img src={URL.createObjectURL(file)}  width="100px" height="100px" alt='' style={{marginRight:"10px"}}/>
                                            {(index+1)%3===0? <><br/><br/></>:''}
                                        </span>
                                    )
                                }
                        </Col>
                    </InputGroup>
                    <Button color='success' onClick={modifyCheck}> 수정 </Button> &nbsp;
                    <Button color='success' onClick={reset}>다시쓰기</Button>
                    </Form>
            </Card>
        </div>
    )
}

export default Modify;