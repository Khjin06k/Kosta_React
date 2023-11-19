import { useState } from 'react';
import { Card,  CardBody, Input, Col, Form, Label, FormGroup, Button, Table } from 'reactstrap';
import Swal from 'sweetalert2';
import axios from 'axios';

function AccountInfo(){
    const [choiceAccount, setChoiceAccount] = useState({id:'',name:'',balance:0,type:'normal',grade:''});
    const [id, setId] = useState('');
    const [check, setCheck] = useState(false);
    
    // 계좌조회 클릭 시
    const accountCheck = (e) =>{
        e.preventDefault();
       
        axios.get(`http://localhost:8080/accountInfo/${id}`)
        .then(res =>{
            console.log(res);
            setChoiceAccount(res.data);
            setCheck(true);
        })
        .catch(err=>{
            console.log(err);
            Swal.fire('계좌 조회 실패');
        })
    }

    return(
        <div>
            <Card style={{width:"600px", margin: "10px auto"}}>
                <h3 style={{margin:"20px"}}>계좌조회</h3>
                <CardBody sm="3">
                    <Form>
                        <FormGroup row>
                            <Label sm="2">계좌번호</Label>
                            <Col sm="8">
                                <Input type="text" id="accountInfo" onChange={(e)=> setId(e.target.value)}></Input>
                            </Col>
                            <Button sm="4" color="success" onClick={accountCheck}>계좌조회</Button>
                        </FormGroup>
                    </Form>
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

export default AccountInfo;