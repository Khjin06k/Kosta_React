import { Badge, Button } from "reactstrap";

function ButtonStrap(){
    return(
        <>
        {/* 대문자 Button은 컴포넌트, 소문자는 태그 (리액트는 대부분 대문자를 많이 사용함)
            뱃지는 대부분 어딘가의 안에 포함시켜서 사용하는 경우가 많음
            버튼은 클릭에 대한 이벤트로 주로 사용
            뱃지는 꾸미는 용도로 많이 사용(링크까지 가능)*/}
            <h1> PRODUCT NAME <Badge color='secondary'>hit</Badge></h1>
            
            <Button color="warning" outline> {/* outline은 채워지지 않고 마우스가 닿으면 pill */}
                Accessor <Badge color="dark">4</Badge>
            </Button>
            <Badge color="danger" pill>pill</Badge>
            <Badge href="http://daum.net" color="warning">GoLink</Badge>
        </>
    )
}

export default ButtonStrap;