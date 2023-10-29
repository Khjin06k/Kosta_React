import {Card, Input, Button, Label, Col, InputGroup, InputGroupAddon, Form, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom';


const BoardDetail = () =>{
    return(
        <div style={{marginTop:"100px"}}>
            <h3 style={{fontWeight:"800"}}> 게시판 글 상세 </h3>
            <Card body style={{width:"700px", margin:"40px auto"}}>
                <Form>
                    <InputGroup row style={{marginBottom:"20px"}}>
                        <Label sm="3">
                            글쓴이
                        </Label>
                        <Input sm="9" type='text' disabled/>
                    </InputGroup>
                    <InputGroup row style={{marginBottom:"20px"}} >
                        <Label sm="3">
                            제목
                        </Label>
                        <Input sm="9" type='text' disabled/>
                    </InputGroup>
                    <InputGroup row style={{marginBottom:"20px"}}>
                        <Label sm="3">
                            내용
                        </Label>
                        <Input sm="9" type='textarea' style={{height:"300px"}} disabled/>
                    </InputGroup>
                    <InputGroup row style={{marginBottom:"20px"}}>
                        <Label sm="3">
                            이미지 파일 첨부
                        </Label>
                        <Col sm="9">
                            <CardImg style={{width:"100px", float:'left', marginBottom:"20px"}} src="logo192.png" alt="logo192"/>
                        </Col>
                        
                    </InputGroup>
                    <Button color='success'> <Link to="/register" style={{color:"white"}}>수정</Link>  </Button> &nbsp;
                    <Button color='success'> <Link to="/boardList" style={{color:"white"}}>게시글 목록</Link></Button>
                    </Form>
            </Card>
        </div>
    )
}

export default BoardDetail;