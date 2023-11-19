import {Card, CardBody, Input, Table, Col, Form, FormGroup, Button, Label} from 'reactstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';

function Withdraw(){
    const [choiceAccount, setChoiceAccount] = useState({id:'',name:'',balance:0,type:'normal',grade:''});
    const changeInput = (e) => {
        setChoiceAccount({...choiceAccount, [e.target.name]:e.target.value});
    }
    const [check, setCheck] = useState(false);

    const withdrawCheck = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:8080/withdraw",choiceAccount)
        .then(res=>{
            console.log(res);
            setChoiceAccount(res.data);
            setCheck(true);
        })
        .catch(err=>{
            console.log(err.response.data)
        })

        Swal.fire({
            title : document.getElementById('balance').value + '원 출금 완료되었습니다',
            icon : 'success',
            confirmButtonColor : '#28a745'
        })
    }
    return(
        <div>
            <Card style={{width:"600px", margin:"20px auto"}}>
                <h3 style={{margin:"20px"}}> 출금 </h3>
                <CardBody style={{margin:"0px auto"}}>
                    <Form tyle={{margin:"0 auto"}}s>
                    <FormGroup row>
                        <Label for="accountId" sm="3">계좌번호</Label>
                        <Col sm="9">
                            <Input type="text" id="accountId" name="id" onChange={changeInput}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="balance" sm="3">출금액</Label>
                        <Col sm="9">
                            <Input type="text" id="balance" name = "balance" onChange={changeInput}/>
                        </Col>
                    </FormGroup>
                    <Button style={{width:"450px"}} color = "success" onClick={withdrawCheck}> 출금 </Button>
                </Form>
                <br/>
                {check && <Table bordered>
                        <tbody>
                            <tr>
                            <th> 계좌번호 </th>
                            <td>{choiceAccount.id}</td>
                        </tr>
                        <tr>
                            <th> 이름 </th>
                            <td>{choiceAccount.name}</td>
                        </tr>
                        <tr>
                            <th> 잔액 </th>
                            <td>{choiceAccount.balance}</td>
                        </tr>
                        <tr>
                            <th> 계좌종류 </th>
                            <td>{choiceAccount.type}</td>
                        </tr>
                            {choiceAccount.type === 'special' && <tr>
                            <th> 등급 </th>
                            <td>{choiceAccount.grade}</td>
                        </tr>
                    }
                        </tbody>
                    </Table>}
                </CardBody>
            </Card>
        </div>
    )
}

export default Withdraw;