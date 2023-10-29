import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function PaginationStrap(){
    return(
        <div>
            {/* 크기를 조절하고 싶다면 size="sm" "lg" "md"(기본) 설정*/}
            <Pagination size="lg">
                {/* 맨 첫 페이지이거나 마지막 페이지인 경우 다음으로 넘어가지 못하도록 할 때 disabled 설정 */}
                <PaginationItem disabled >
                    {/* previous는 페이지네이션의 맨 앞쪽 화살표를 의미(왼쪽을 가리키는 화살표) */}
                    <PaginationLink previous href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="?page=1">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="?page=2">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="?page=3">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="?page=4">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="?page=5">5</PaginationLink>
                </PaginationItem>
                {/* next는 페이지네이션의 맨 뒤쪽 화살표를 의미(오른쪽을 가리키는 화살표) */}
                <PaginationItem>
                    <PaginationLink next href="#"/>
                </PaginationItem>
            </Pagination>
        </div>
    )
}

export default PaginationStrap;