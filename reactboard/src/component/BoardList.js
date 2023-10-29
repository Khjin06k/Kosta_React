import Swal from 'sweetalert2';
import {Button, Table, Input, Form, FormGroup, Col, Img, ButtonGroup, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import "./Board.css"


const BoardList = () =>{
    const deleteAlert = (e) =>{
        Swal.fire({
            title : '정말 삭제하시겠습니까?',
            confirmButtonText : '예',
            confirmButtonColor : 'primary',
            showCancelButton : true,
            cancelButtonColor : '#28a745',
            cancelButtonText : '취소'
        })
    }
    return(
        <div style={{width:"900px", margin:"100px auto"}}>
            <h3 style={{margin:"50px auto", fontWeight:"800"}}> 게시판 글 목록</h3>
            <Form>
                <FormGroup row>
                    <Col sm="3">
                        <Input type="select">
                            <option value="title">제목</option>
                            <option value="content">내용</option>
                            <option value="writer">작성자</option>
                        </Input>
                    </Col>
                    <Col sm="5">
                        <Input type="tetx"/>
                    </Col>
                    <Col sm="2">
                        <Button color='success' style={{width:"50px", height:"40px"}}> <img src="./img/search.png" alt="search.png" style={{width:"25px"}}/> </Button>
                    </Col>
                    <Col sm="2">
                        <Button color='success'> <Link to="/register" style={{color:"white"}}>글쓰기</Link> </Button>
                    </Col> 
                </FormGroup>
           </Form>
           <Table bordered hover>
                <thead>
                    <tr className="table-success">
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                        <th>조회수</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> <Link to="/boardDetail" style={{color:"green"}}>1</Link></td>
                        <td> 제목1 </td>
                        <td> 홍길동</td>
                        <td> 2023-04-01</td>
                        <td> 5 </td>
                        <td> <Button color='success' onClick={deleteAlert}>삭제</Button></td>
                    </tr>
                    <tr>
                        <td> <Link to="/boardDetail" style={{color:"green"}}>2</Link></td>
                        <td> 제목2 </td>
                        <td> 고길동</td>
                        <td> 2023-04-02</td>
                        <td> 3 </td>
                        <td> <Button color='success' onClick={deleteAlert}>삭제</Button></td>
                    </tr>
                    <tr>
                        <td> <Link to="/boardDetail" style={{color:"green"}}>3</Link></td>
                        <td> 제목3 </td>
                        <td> 가길동</td>
                        <td> 2023-04-03</td>
                        <td> 2 </td>
                        <td> <Button color='success' onClick={deleteAlert}>삭제</Button></td>
                    </tr>
                    <tr>
                        <td> <Link to="/boardDetail" style={{color:"green"}}>4</Link></td>
                        <td> 제목4 </td>
                        <td> 나길동</td>
                        <td> 2023-04-04</td>
                        <td> 1 </td>
                        <td> <Button color='success' onClick={deleteAlert}>삭제</Button></td>
                    </tr>
                    <tr>
                        <td> <Link to="/boardDetail" style={{color:"green"}}>5</Link></td>
                        <td> 제목5 </td>
                        <td> 다길동</td>
                        <td> 2023-04-05</td>
                        <td> 0 </td>
                        <td> <Button color='success' onClick={deleteAlert}>삭제</Button></td>
                    </tr>
                </tbody>
           </Table>
           <Pagination size="md" style={{display: "flex", justifyContent: "center"}}>
                {/* 맨 첫 페이지이거나 마지막 페이지인 경우 다음으로 넘어가지 못하도록 할 때 disabled 설정 */}
                <PaginationItem>
                    {/* previous는 페이지네이션의 맨 앞쪽 화살표를 의미(왼쪽을 가리키는 화살표) */}
                    <PaginationLink previous href="#"/>
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink href="?page=1">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="?page=2">2</PaginationLink>
                </PaginationItem>
                <PaginationItem > 
                    <PaginationLink href="?page=3">3</PaginationLink>
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink href="?page=4">4</PaginationLink>
                </PaginationItem>
                <PaginationItem className="custom-pagination-item">
                    <PaginationLink href="?page=5">5</PaginationLink>
                </PaginationItem>
                {/* next는 페이지네이션의 맨 뒤쪽 화살표를 의미(오른쪽을 가리키는 화살표) */}
                <PaginationItem >
                    <PaginationLink next href="#"/>
                </PaginationItem>
            </Pagination>
            
        </div>
    );
}

export default BoardList;