import {UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap';

function CollapseStrap(){
    return( // CardBody안에 있는 내용들을 펼쳤다/접었다가 가능하도록 함 (보이지 않으면 자리를 아예 차지하지 않음)
        // CardBody 안의 내용을 변수로(변경해가면서) 받아야 하는 경우에는 CollapseStrap2를 참고
        <>
            <Button style={{marginBottom:"10px"}} color="warning" id="toggle">펼치기/접기</Button>
            <UncontrolledCollapse toggler="#toggle">
                <Card style={{width:"400px", margin:"0 auto"}}>
                    <CardBody >
                    구글 등 해외 플랫폼 사업자가 망 사용료를 내도록 하는 규제가 필요하다는 주장이 제기됐다.
                    유튜브 인기 영향으로 구글의 국내 통신망 트래픽 비중은 28.6%(지난해 4분기 기준)인데 납부하는 망 사용료는 0원이다. 
                    국회 과학기술정보방송통신위원회 소속 김병욱 국민의힘 의원은 "구글이 망 사용에 따른 정당한 대가를 내도록 법적인 제재 방안을 조속히 강구해야 한다"고 26일 밝혔다. 
                    과학기술정보통신부에 따르면 지난해 4분기 기준 해외 사업자의 일평균 국내 트래픽 비중 1위는 구글로 28.6%다. 
                    2위인 넷플릭스(5.5%)보다 5배 이상 많다.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
            <br/>
            <Button style={{marginBottom:"10px"}} color="warning" id="toggle">테스트 버튼</Button>

        </>
    )
}

export default CollapseStrap;