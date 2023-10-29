import { useState } from 'react';
import { Card,  CardBody, Input, Col, Form, Label, FormGroup, Button, Table } from 'reactstrap';
import Swal from 'sweetalert2';

function AccountInfo(){
    const [check, setCheck] = useState(false);
    const accountCheck = () => {
        setCheck(true);
    }
    return(
        <div>
            <Card style={{width:"600px",  margin:"100px auto", borderWidth:"3px", borderRadius:"10px", borderColor:"black"}}>
                <h3 style={{margin:"20px"}}>계좌조회</h3>
                <CardBody sm="3">
                    <Form>
                        <FormGroup row>
                            <Label sm="3">계좌번호</Label>
                            <Col sm="9">
                                <Input type="text" id="accountInfo"></Input>
                                <Button style={{width:"100px"}}color="success" onClick={accountCheck}>계좌조회</Button>
                            </Col>
                            
                        </FormGroup>
                    </Form>
                    {check && <Table bordered>
                        <tbody>
                            <tr>
                            <th> 계좌번호 </th>
                            <td>10001</td>
                        </tr>
                        <tr>
                            <th> 이름 </th>
                            <td>홍길동</td>
                        </tr>
                        <tr>
                            <th> 잔액 </th>
                            <td>100000</td>
                        </tr>
                        <tr>
                            <th> 계좌종류 </th>
                            <td>normal</td>
                        </tr>
                        </tbody>
                    </Table>}
                </CardBody>
                
            </Card>
        </div>
    )
}

export default AccountInfo;