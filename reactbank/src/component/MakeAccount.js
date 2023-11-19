import {Button, Card, CardBody, Form, Label, Input, Col, InputGroup, InputGroupAddon, InputGroupButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { FormGroup } from 'reactstrap';
import axios from 'axios';

function MakeAccount(){
    const [choiceAccount, setChoiceAccount] = useState({id:'',name:'',balance:0,type:'normal',grade:''});
    // 게좌 종류 선택 시 라디오 버튼 제어
    // 일반계좌 선택 시 등급 선택 드롭다운 disabled 설정
    const [check, setCheck] = useState("");
    const changeInput = (e) => {
        setChoiceAccount({...choiceAccount, [e.target.name]:e.target.value});
    }

    const checkAccount = (e) =>{
        if(e.target.value === '일반계좌'){
            setCheck(e.target.value);
            setChoiceAccount({...choiceAccount, type:e.target.value});
            document.getElementById('gradeId').disabled = true;
        }else{
            setCheck(e.target.value);      
            document.getElementById('gradeId').disabled = false;      
        }
    }

    // 등급 선택 시 값 변경
    const [grade, setGrade] = useState('NORMAL');
    const changeGrade = (e) => {
        console.log(e.target.value);
        setGrade(e.target.value);
        setChoiceAccount({...choiceAccount, grade:e.target.value});
    }
    
    // 계좌개설 클릭 시 모달창
    const makeAccount = (e) =>{
        e.preventDefault();
        
        let sacc = {...choiceAccount};
        if(sacc.type === 'normal'){
            sacc.grade = '';
        }

        console.log(sacc);
       
        axios.post("http://localhost:8080/makeAccount",sacc)
        .then(res =>{
            console.log(res);
            Swal.fire(res.data);
        })
        .catch(err=>{
            console.log(err);
            Swal.fire(err.response.data);
        })
    }

    return(
            <div>
                <Card style={{width:"600px", margin:"10px auto"}}>
                    <CardBody style={{margin:"10px"}}>
                        <h3>계좌개설</h3>
                        <Form style={{margin:"20px"}}>
                            <FormGroup row>
                                <Label for="accountId" sm="3"> 계좌번호</Label>
                                <Col sm="9">
                                    <Input id="accountId" name="id" type="text" onChange={changeInput}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="nameId" sm="3"> 이름</Label>
                                <Col sm="9">
                                    <Input id="nameId" name="name" type="text" onChange={changeInput}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="balanceId" sm="3"> 입금액 </Label>  
                                <Col sm="9">
                                    <Input id="balanceId" name="balance" type="text" onChange={changeInput}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="choiceAccountId" sm="3"> 계좌종류</Label>
                                <Col sm="9">
                                    <Label> 
                                    <Input type="radio" id="choiceAccountId" name="type" value="일반계좌" checked={check==="일반계좌"} onChange={checkAccount}/> 
                                    일반계좌  </Label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Label>
                                    <Input type="radio" id="choiceAccountId" name="type" value="특수계좌" checked={check==="특수계좌"} onChange={checkAccount}/> 
                                    특수계좌 </Label>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="gradeId" sm="3">등급</Label>
                                <Col sm="9">
                                    <Input type="select" id="gradeId" name="grade" onChange={changeGrade}>
                                        <option value="default">선택하세요</option>
                                        <option value="VIP">VIP</option>
                                        <option value="GOLD">GOLD</option>
                                        <option value="SILVER">SILVER</option>
                                        <option value="NORMAL">NOMAL</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <Button color="success" style={{width:"500px"}} onClick={makeAccount}>계좌개설</Button>
                        </Form>
                    </CardBody>
                </Card>


            </div>
    )
}
export default MakeAccount;