import Swal from 'sweetalert2';
import {Button, Table, Input, Form, FormGroup, Col, Card, CardBody,Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import {Link, useParams} from 'react-router-dom';
import "./Board.css"
import { useState, useEffect } from 'react';
import axios from 'axios';


const BoardList = () =>{
    const {page} = useParams(); // 파라미터에 작성한 이름 그대로 작성해야 하며 대괄호가 아닌 중괄호로 사용함
    const [boardList, setBoardList] = useState([]); // 게시글 목록
    const [pageBtn, setPageBtn] = useState([]) // 페이지네이션 버튼
    const [pageInfo, setPageInfo] = useState({}); // 페이지 정보
    // 검색 타입 및 검색어
    const [type, setType] = useState("");
    const [keyword, setKeyword] = useState("");
    const [isSearch, setIsSearch] = useState(false); // 검색했는지 여부 확인 (페이지 클릭에 사용)
    
    
    useEffect(
        ()=>{
            checkPage(page);
        },[page]
    )

    const checkPage = (repage) =>{        
        axios.get(`http://localhost:8080/${repage}`)
        .then(res=>{
            console.log(res);
            let pageInfo = res.data.pageInfo;
            let boardList = res.data.boardList;

            setBoardList([...boardList]); // boardList에 board 저장
            // 페이지 버튼 설정하기 (범위가 되어야 하기 때문에 반복문을 이용함)
            let btn = [];
            for(let i=pageInfo.startPage; i<=pageInfo.endPage; i++){
                btn.push(i);
            }
            setPageBtn(btn);
            setPageInfo({...pageInfo});
            setIsSearch(false);
            
            //setCurPage(pageInfo.curPage);
            console.log("all" + pageInfo.allPage + "cur" + pageInfo.curPage + "start" + pageInfo.startPage + "end" + pageInfo.endPage);
        })
        .catch(err=>{
            // Check if there is a response object in the error
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log('Server responded with status:', err.response.status);
                console.log('Error details:', err.response.data);
            } else if (err.request) {
                // The request was made but no response was received
                console.log('No response received. Request details:', err.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', err.message);
            }
        })
    }

    const searchSubmit = () =>{
        reBoardSearch(1);
    }

    // 검색 시 게시글 수정
    const reBoardSearch = (repage)=>{
        if(type===''){
            alert('검색 타입을 선택하세요');
            return;
        }

        if(keyword===''){
            alert('키워드를 입력하세요');
            return;
        }

        axios.get(`http://localhost:8080/search/${pageInfo.curPage}/${type}/${keyword}`)
        .then(res=>{
            console.log(res);
            let pageInfo = res.data.pageInfo;
            let boardList = res.data.searchBoardList;
            console.log("11")
            setBoardList([...boardList]); // boardList에 board 저장
            // 페이지 버튼 설정하기 (범위가 되어야 하기 때문에 반복문을 이용함)
            console.log("12")

            let btn = [];
            for(let i=pageInfo.startPage; i<=pageInfo.endPage; i++){
                btn.push(i);
            }
            setPageBtn(btn);
            setPageInfo({...pageInfo});
            setIsSearch(true);
        })
        .catch(err=>{
            // Check if there is a response object in the error
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log('Server responded with status:', err.response.status);
                console.log('Error details:', err.response.data);
            } else if (err.request) {
                // The request was made but no response was received
                console.log('No response received. Request details:', err.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', err.message);
            }
        });
    }

    const pageChange = (repage) =>{
        if(isSearch) reBoardSearch(repage);
        else checkPage(repage);
    }

    // 게시글 삭제
    const deleteAlert = (e) =>{
        Swal.fire({
            title : '정말 삭제하시겠습니까?',
            confirmButtonText : '예',
            confirmButtonColor : 'primary',
            showCancelButton : true,
            cancelButtonColor : '#28a745',
            cancelButtonText : '취소'
        }).then(result=>{
            // 여기서는 onClick 이벤트에서만 setNum 호출
            let boardNum = e.target.id;
            // 그 이후에는 axios.delete 등의 로직 처리
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8080/boardDelete/${boardNum}`)
                    .then(res => {
                        console.log(res.data);
                        //let num = res.data;
                        //let reboards = boardList.filter(board=>board.num !== num); // 해당 보드 번호를 가진 것을 목록에서 삭제 후 재저장함
                        //setBoardList([...reboards]);
                        checkPage(pageInfo.curPage);
                    })
                    .catch(err => {
                         // Check if there is a response object in the error
                        if (err.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log('Server responded with status:', err.response.status);
                            console.log('Error details:', err.response.data);
                        } else if (err.request) {
                            // The request was made but no response was received
                            console.log('No response received. Request details:', err.request);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('Error', err.message);
                        }
                });
            }
        })
    }

    return(
        <div style={{width:"900px", margin:"100px auto"}}>
            <h3 style={{margin:"50px auto", fontWeight:"800"}}> 게시판 글 목록</h3>
            <Form>
                <FormGroup row>
                    <Col sm="3">
                        <Input type="select" onChange={(e)=>setType(e.target.value)}>
                            <option value="">선택하세요</option>
                            <option value="title">제목</option>
                            <option value="content">내용</option>
                            <option value="writer">작성자</option>
                        </Input>
                    </Col>
                    <Col sm="5">
                        <Input type="tetx" name="keyword" onChange={(e) => setKeyword(e.target.value)}/>
                    </Col>
                    <Col sm="2">
                        <Button color='success' style={{width:"50px", height:"40px"}} onClick={searchSubmit}> <img src="./img/search.png" alt="search.png" style={{width:"25px"}}/> </Button>
                    </Col>
                    <Col sm="2">
                        <Button color='success'> <Link to="/register" style={{color:"white"}}>글쓰기</Link> </Button>
                    </Col> 
                </FormGroup>
           </Form>
           <Card style={{width:"600px", margin:"20px auto"}}>
                <h3 style={{margin: "10px"}}>전체계좌조회</h3>
                <CardBody>
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
                                {
                                    boardList.map(board=> {
                                        return(<tr key={board.num}>
                                            <td> <Link to={"/boardDetail/"+board.num}>{board.num}</Link></td>
                                            <td>{board.title}</td>
                                            <td>{board.writer}</td>
                                            <td>{board.writedate}</td>
                                            <td>{board.viewcount}</td>
                                            <td> <Button color='success' id={board.num} onClick={deleteAlert}>삭제</Button></td>
                                        </tr>)
                                    })
                                } 
                            </tbody>
                    </Table>
                    </CardBody>
            </Card>

           <Pagination size="md" style={{display: "flex", justifyContent: "center"}}>
                {
                    pageInfo.curPage===1?
                    <PaginationItem disabled>
                            <PaginationLink previous href="#"/> 
                    </PaginationItem> :
                    <PaginationItem >
                        <PaginationLink previous onClick={()=>pageChange(pageInfo.curPage-1)}/> 
                    </PaginationItem> 
                }
                {
                    pageBtn.map(item=>{
                        return(
                             <PaginationItem key={item} className={item===pageInfo.curPage?'active':''}>
                                {/*<PaginationLink href={"/"+item}>{item}</PaginationLink>*/}
                                <PaginationLink id={item} onClick={()=>pageChange(item)}>{item}</PaginationLink>
                            </PaginationItem>
                        )
                    })
                }
                {
                    pageInfo.curPage===pageInfo.endPage?
                    <PaginationItem disabled>
                            <PaginationLink next href="#"/> 
                    </PaginationItem> :
                    <PaginationItem >
                        <PaginationLink next onClick={()=>pageChange(pageInfo.curPage+1)}/> 
                    </PaginationItem> 
                }
                </Pagination>
        </div>
    );
}

export default BoardList;