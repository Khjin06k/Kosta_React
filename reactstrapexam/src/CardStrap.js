import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

function CardStrap(){
    return(
        <>
        {/* style을 통해 크기를 제어하지만 Img의 경우에는 그 자체가 height과 width를 가지고 있기 때문에 
        해주지 않아도  되었지만 CardImg의 경우에는 style을 통해 width 제어가 가능함

        중괄호를 2개 쓰는 의미는 하나는 자바 스크립트의 의미, 하나는 스타일이기 때문
         */}
            <Card style={{ width:"300px", margin:"10px"}} >
                <CardImg style={{width:"80%", margin:"0 auto"}} src="logo192.png" alt="logo192"/>
                <CardBody>
                    <CardTitle>REACT</CardTitle>
                    <CardSubtitle>front component</CardSubtitle>
                    <CardText>React is front component</CardText>
                    <Button>조회</Button>
                </CardBody>
            </Card>
            <br/>

            {/* body를 아래와 같이 바로 써줄 수 있음*/}
            <Card body style={{ width:"300px"}} className="text-start">
                <CardTitle>카드 제목</CardTitle>
                <CardText>카드 내용입니다</CardText>
                <Button>선택</Button>
            </Card>
        </>
    )
}

export default CardStrap;