import { Button } from "reactstrap";

const Section5 = () =>{
    return(
        <div style={{width:"100%"}}>
            <div className='componentBox Hover'>
                <span className='L-text'>
                    복잡한 서류 제출을 간편하게, 내가 원하는 시간에
                </span> <br/>
                <span className="L-text">
                    이사 날짜가 주말이나 공휴일이어도 전월세보증금 대출을 신청할 수 있습니다.
                </span> <br/>
                <Button color='light' size='md'> 마이너스 통장대출 &gt;</Button> &nbsp;
                <Button color='light' size='md'> 신용대출 &gt;</Button> &nbsp;
                <Button color='light' size='md'> 개인사업자 대출 &gt;</Button> &nbsp;
                <Button color='light' size='md'> 전월세 보증금 대출 &gt;</Button> <br/>
                <img src="./img/main-loan.png" width='480px' height='720px' alt=""/>
            </div>
        </div>
    );
}

export default Section5;