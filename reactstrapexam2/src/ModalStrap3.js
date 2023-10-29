import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { useState } from 'react';

function ModalStrap3(){ // 토글 안에 토글 설정
    // 모달 열고 닫고 사이의 변환 관계를 잘 파악하여 코딩 필요
    const [modal, setModal] = useState(false); // 첫 번째 모달
    const [nestedModal, setNestedModal] = useState(false); // 모달 안에 포함된 모달
    const toggle = () => {setModal(!modal)};
    const toggleNested = () => {
        setNestedModal(!nestedModal)
    };
    const toggleAll = () => {
        setNestedModal(false);
        setModal(false);
    };
    return(
        <div style={{width:"800px"}}>
            <Button color="danger" onClick={toggle}> 첫 모달 </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}> "국내 통신망 제일 많이 쓰는 구글, 사용료는 '0원'"</ModalHeader>
                <ModalBody>
                구글 등 해외 플랫폼 사업자가 망 사용료를 내도록 하는 규제가 필요하다는 주장이 제기됐다.
                 유튜브 인기 영향으로 구글의 국내 통신망 트래픽 비중은 28.6%(지난해 4분기 기준)인데 납부하는 망 사용료는 0원이다. 
                 국회 과학기술정보방송통신위원회 소속 김병욱 국민의힘 의원은 "구글이 망 사용에 따른 정당한 대가를 내도록 법적인 제재 방안을 조속히 강구해야 한다"고 26일 밝혔다. 
                 과학기술정보통신부에 따르면 지난해 4분기 기준 해외 사업자의 일평균 국내 트래픽 비중 1위는 구글로 28.6%다. 
                 2위인 넷플릭스(5.5%)보다 5배 이상 많다.
                <br/>
                <Button color='success' onClick={toggleNested}>두번째 모달</Button>
                <Modal isOpen={nestedModal} toggle={toggleNested}>
                    <ModalHeader toggle={toggleNested}> " 세상 쓸데 없는 애플 걱정?…아이폰15 韓 초반 흥행 성공"</ModalHeader>
                    <ModalBody>
                        애플 아이폰15 시리즈가 국내에서 전작보다 빠르게 팔려나간 것으로 나타났다.
                        25일 시장조사업체 애틀러스리서치앤컨설팅에 따르면, 아이폰15 시리즈의 첫 주 판매량은 전작인 아이폰14 시리즈의 같은 기간 판매량보다 49.5% 많다.
                        아이폰15 기본형은 전작 대비 137% 넘게 팔리며 가장 큰 폰의 성장세를 보였다.
                    </ModalBody>
                    <ModalFooter>
                    <Button  color='primary' onClick={toggleNested}>닫기</Button> {' '} {/* 한칸 띄고 싶을 때 사용 */}
                    <Button  color='secondary' onClick={toggleAll}>전체 닫기</Button> 
                </ModalFooter>
                    </Modal>
                </ModalBody>
                <ModalFooter>
                    <Button  color='primary' onClick={()=>setModal(!toggle)}>처리</Button> {' '} {/* 한칸 띄고 싶을 때 사용 */}
                    <Button  color='secondary' onClick={()=>setModal(!toggle)}>취소</Button> 
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalStrap3;