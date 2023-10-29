import {useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';

function TabsStrap(){
    const [activeTab, setActiveTab] = useState('1');

    return(
        <div style={{width:"500px"}}>
            <Nav tabs>
                {/* 하나의 탭을 링크로 걸어둠 */}
                <NavItem>
                    {/* classNAmes는 active가 후자의 것과 동일하면 className="active" 를 추가하는 역할
                    className="active"는 선택된 아이가 활성되 되도록(선택된 것 처럼 보이도록) 하는 역할

                    className={activeTab==='1'?"active:""} 처럼 삼항조건연산자를 이용해서 classnames 모듈을 사용하지 않아도 구현은 가능함
                    */}
                    <NavLink
                        className={classnames({active:activeTab==='1'})}
                        onClick={()=>setActiveTab('1')}>Tab1</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        className={classnames({active:activeTab==='2'})}
                        onClick={()=>setActiveTab('2')}>Tab2</NavLink>
                </NavItem>
            </Nav>
            {/* 위에서 탭을 2개 만들었기 때문에 아래도 TabPane을 2개를 만들어야 함 */}
            {/* activeTab을 아래에서 설정했기에 NavLink에서 onClick시 맞는 activeTab을 가져와서 이동 */}
            <TabContent activeTab={activeTab}>
                {/*activeTab이 어떤것이냐에 따라서 다르게 보여줌 tabId를 통해 구분 */}
                <TabPane tabId={'1'}>
                    <Row>
                        <Col sm="12">
                            <h4>Tab 1 Contents</h4>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId={'2'}>
                    <Row>
                        {/*sm은 비율로 전체가 12가 되어야 함 */}
                        <Col sm="6">
                            <Card body className="mt-2 ml-2">
                            <CardTitle> "국내 통신망 제일 많이 쓰는 구글, 사용료는 '0원'" </CardTitle>
                            <CardText>
                            구글 등 해외 플랫폼 사업자가 망 사용료를 내도록 하는 규제가 필요하다는 주장이 제기됐다.
                            </CardText>
                            <Button> 자세히 </Button>
                            </Card>
                        </Col>
                        <Col sm="6">
                        <Card body className="mt-2 ml-2">
                            <CardTitle> "국내 통신망 제일 많이 쓰는 구글, 사용료는 '0원'" </CardTitle>
                            <CardText>
                                구글 등 해외 플랫폼 사업자가 망 사용료를 내도록 하는 규제가 필요하다는 주장이 제기됐다.
                            </CardText>
                            <Button> 자세히 </Button>
                        </Card>
                        </Col>
                    </Row>
                </TabPane>

            </TabContent>
        </div>
    )
}

export default TabsStrap;