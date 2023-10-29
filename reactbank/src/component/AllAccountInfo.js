import {Table, Card, CardBody} from 'reactstrap';

function AllAccountInfo(){
    return(
        <div>
            <Card style={{width:"600px", margin:"20px auto"}}>
                <h3 style={{margin: "10px"}}>전체계좌조회</h3>
                <CardBody>
                    <Table bordered>
                    <thead>
                        <th>계좌번호</th>
                        <th>이름</th>
                        <th>잔액</th>
                        <th>종류</th>
                        <th>등급</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1001</td>
                            <td>홍길동</td>
                            <td>100000</td>
                            <td>normal</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>1002</td>
                            <td>김길동</td>
                            <td>200000</td>
                            <td>special</td>
                            <td>VIP</td>
                        </tr>
                        <tr>
                            <td>1003</td>
                            <td>고길동</td>
                            <td>300000</td>
                            <td>special</td>
                            <td>GOLD</td>
                        </tr>
                        <tr>
                            <td>1004</td>
                            <td>하길동</td>
                            <td>400000</td>
                            <td>normal</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>1005</td>
                            <td>장길동</td>
                            <td>500000</td>
                            <td>special</td>
                            <td>SILVER</td>
                        </tr>
                    </tbody>
                    </Table>
                </CardBody>
            </Card>
            
        </div>
    )
}

export default AllAccountInfo;