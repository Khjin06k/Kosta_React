import { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function ModalStrap(){
    const [open, setOpen] = useState(false);
    return(
        <div>
            {/* 버튼을 눌렀을 때 항상 모달창이 열려야 하기 때문에 true로 설정 */}
            <Button color='danger' onClick={() => setOpen(true)}> 모달 </Button>
            {/* open이 true가 되면 열리는 모달창이고 모달창이 열리면 다시 false로 변경함 */}
            <Modal isOpen={open} toggle={() => setOpen(!open)}>
                {/*  */}
                <ModalHeader toggle={() => setOpen(!open)}> "국내 통신망 제일 많이 쓰는 구글, 사용료는 '0원'" </ModalHeader>
                <ModalBody>
                구글 등 해외 플랫폼 사업자가 망 사용료를 내도록 하는 규제가 필요하다는 주장이 제기됐다.
                 유튜브 인기 영향으로 구글의 국내 통신망 트래픽 비중은 28.6%(지난해 4분기 기준)인데 납부하는 망 사용료는 0원이다. 
                 국회 과학기술정보방송통신위원회 소속 김병욱 국민의힘 의원은 "구글이 망 사용에 따른 정당한 대가를 내도록 법적인 제재 방안을 조속히 강구해야 한다"고 26일 밝혔다. 
                 과학기술정보통신부에 따르면 지난해 4분기 기준 해외 사업자의 일평균 국내 트래픽 비중 1위는 구글로 28.6%다. 
                 2위인 넷플릭스(5.5%)보다 5배 이상 많다.
                </ModalBody>
                <ModalFooter>
                    <Button  color='primary' onClick={()=>setOpen(!open)}>확인</Button> {' '} {/* 한칸 띄고 싶을 때 사용 */}
                    <Button  color='secondary' onClick={()=>setOpen(!open)}>취소</Button> 
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalStrap;