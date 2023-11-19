import {Table, Card, CardBody} from 'reactstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

function AllAccountInfo(){
    const [accountList, setAccountList] = useState([]);
    useEffect(
        ()=>{
            axios.get("http://localhost:8080/allAccountInfo")
            .then(res=>{
                console.log(res.data)
                setAccountList([...res.data]);
            })
            .catch(err=>{
                console.log(err.data);
            })
        },[]
    )

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
                         {
                        accountList.map(acc=> {
                            return(<tr key={acc.id}>
                                <td>{acc.id}</td>
                                <td>{acc.name}</td>
                                <td>{acc.balance}</td>
                                <td>{acc.type}</td>
                                <td>{acc.grade}</td>
                            </tr>)
                        })
                    }        
                    </tbody>
                    </Table>
                </CardBody>
            </Card>
            
        </div>
    )
}

export default AllAccountInfo;