import {Card, Input, Button, Label, Col, InputGroup, Form} from 'reactstrap';
import {Link, useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BoardDetail = () =>{
    const {num} = useParams();
    const [board, setBoard] = useState({num:null, writer:'', content:'', fileurl:''});
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

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
            })
        }
    ,[num])
    

    const boardModify = (num) =>{ 
        navigate(`/modify/${num}`);// 파라미터 값을 넘길 수 있음
    }

    return(
        <div style={{marginTop:"100px"}}>
            <h3 style={{fontWeight:"800"}}> 게시판 글 상세 </h3>
            <Card body style={{width:"700px", margin:"40px auto"}}>
                <Form>
                    <InputGroup row style={{marginBottom:"20px"}}>
                        <Label sm="3">
                            글쓴이
                        </Label>
                        <Input sm="9" type='text' value={board.writer} disabled/>
                    </InputGroup>
                    <InputGroup row style={{marginBottom:"20px"}} >
                        <Label sm="3">
                            제목
                        </Label>
                        <Input sm="9" type='text' value={board.title} disabled/>
                    </InputGroup>
                    <InputGroup row style={{marginBottom:"20px"}}>
                        <Label sm="3">
                            내용
                        </Label>
                        <Input sm="9" type='textarea' style={{height:"300px"}} value={board.content} disabled/>
                    </InputGroup>
                    <InputGroup row style={{marginBottom:"20px"}}>
                        <Label sm="3">
                            이미지 파일 첨부
                        </Label>
                        <Col sm="9">
                                {images.length!==0 &&
                                    images.map(number => 
                                        <img key={number} src={`http://localhost:8080/image/${number}`} width="100px" alt='' style={{marginRight:"10px"}}/>
                                    )
                                } 
                           
                        </Col>
                        
                    </InputGroup>
                    <Button color='success' onClick={()=>boardModify(board.num)}> 수정 </Button> &nbsp;
                    <Button color='success'> <Link to="/boardList" style={{color:"white"}}>게시글 목록</Link></Button>
                    </Form>
            </Card>
        </div>
    )
}

export default BoardDetail;