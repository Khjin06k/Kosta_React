import {Card, CardBody, Input, Col, Form, FormGroup, Button, Label} from 'reactstrap';
import Swal from 'sweetalert2';

function Deposit(){
    const depositCheck = (e) =>{
        Swal.fire({
            title : document.getElementById('money').value + '원 출금 완료되었습니다',
            icon : 'success',
            confirmButtonColor : '#28a745'
        })
    }
    return(
        <div>
            <Card style={{width:"600px", margin:"20px auto"}}>
                <h3 style={{margin:"20px"}}> 입금 </h3>
                <CardBody style={{margin:"0px auto"}}>
                    <Form tyle={{margin:"0 auto"}}s>
                    <FormGroup row>
                        <Label for="accountId" sm="3">계좌번호</Label>
                        <Col sm="9">
                            <Input type="text" id="accountId"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="money" sm="3">입금액</Label>
                        <Col sm="9">
                            <Input type="text" id="money"/>
                        </Col>
                    </FormGroup>
                    <Button style={{width:"450px"}} color = "success" onClick={depositCheck}> 입금 </Button>
                </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default Deposit;