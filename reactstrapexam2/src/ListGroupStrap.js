import {ListGroup, ListGroupItem, Badge, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';

function ListGroupStrap(){
    return(
        <div style={{width:"500px"}}>
            {/* 리스트를 뿌려주는 것 */}
            <ListGroup>
                <ListGroupItem className='justify-content-between'>Cras jsto odio<Badge pill>14</Badge></ListGroupItem>
                <ListGroupItem className='justify-content-between'>Dapibus ac facilisis in<Badge pill>2</Badge></ListGroupItem>
                <ListGroupItem className='justify-content-between'>Morbi leo risus<Badge pill>1</Badge></ListGroupItem>
            </ListGroup>

            {/* 링크를 가져오는 것도 가능*/}
            <ListGroup>
                <ListGroupItem className='justify-content-between' color="success" tag="a" href="https://n.news.naver.com/mnews/article/469/0000766898?sid=105">스마트폰 두뇌 만드는 퀄컴도 참전...'생성형 AI' 경쟁 더 뜨겁다<Badge pill>14</Badge></ListGroupItem>
                <ListGroupItem className='justify-content-between' tag="a" href="#">Dapibus ac facilisis in<Badge pill>2</Badge></ListGroupItem>
                <ListGroupItem className='justify-content-between' tag="a" href="#">Morbi leo risus<Badge pill>1</Badge></ListGroupItem>
            </ListGroup>
            <br/><br/>
            {/* ListGroupItem 안에서도 헤더와 텍스트로 제목과 본문을 나눠서 보일 수 있도록 설정 가능*/}
            <ListGroup>
                <ListGroupItem>
                    <ListGroupItemHeading>"국내 통신망 제일 많이 쓰는 구글, 사용료는 '0원'"</ListGroupItemHeading>
                    <ListGroupItemText>
                        구글 등 해외 플랫폼 사업자가 망 사용료를 내도록 하는 규제가 필요하다는 주장이 제기됐다. 유튜브 인기 영향으로 구글의 국내 통신망 트래픽 비중은 28.6%(지난해 4분기 기준)인데 납부하는 망 사용료는 0원이다.
                        국회 과학기술정보방송통신위원회 소속 김병욱 국민의힘 의원은 "구글이 망 사용에 따른 정당한 대가를 내도록 법적인 제재 방안을 조속히 강구해야 한다"고 26일 밝혔다.
                        과학기술정보통신부에 따르면 지난해 4분기 기준 해외 사업자의 일평균 국내 트래픽 비중 1위는 구글로 28.6%다. 2위인 넷플릭스(5.5%)보다 5배 이상 많다.
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>
                        세상 쓸데 없는 애플 걱정?…아이폰15 韓 초반 흥행 성공
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                        애플 아이폰15 시리즈가 국내에서 전작보다 빠르게 팔려나간 것으로 나타났다.
                        25일 시장조사업체 애틀러스리서치앤컨설팅에 따르면, 아이폰15 시리즈의 첫 주 판매량은 전작인 아이폰14 시리즈의 같은 기간 판매량보다 49.5% 많다.
                        아이폰15 기본형은 전작 대비 137% 넘게 팔리며 가장 큰 폰의 성장세를 보였다.
                    </ListGroupItemText>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default ListGroupStrap;