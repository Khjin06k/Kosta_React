import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
// Breadcrumb와 BreadcrumbItem은 포함관계
// 대부분 밖에 있는 것은 nav 태그(tag), 안에 있는 것은 a(tag) 태그로 만들어 줌
// tag=""으로 작성했을 때 해당 태그로 만들어줌.

function BreadCrumbStrap(){
    return(
        <div id="top">
            <Breadcrumb tag="nav" listTag="div">
                {/* 
                href="#"은 해당 아이디를 가진 곳으로 이동
                active를 넣어주면 class active를 넣어주고 디자인 변경이 가능
                 */}
                <BreadcrumbItem tag="a" href="#top"> Go Top </BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#bottom"> Go Bottom </BreadcrumbItem>
                <BreadcrumbItem active tag="span"> Data </BreadcrumbItem>
            </Breadcrumb>
            <div id="bottom" style={{marginTop:"1000px"}}>
                <span>bottom</span>
            </div>
        </div>
    )
}

export default BreadCrumbStrap;