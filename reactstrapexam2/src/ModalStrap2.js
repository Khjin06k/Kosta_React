import { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup} from 'reactstrap';

function ModalStrap2(){
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open); // toggle을 매번 작성하는 번거로움을 줄이기 위함
    const [fruit, setFruit] = useState('banana');
    const change = (e) => {
        console.log(e.target.value);
        setFruit(e.target.value);
    }
    // 전송 버튼 클릭 시 
    const send = () =>{
        console.log("데이터 전송");
        toggle(); // 확인 클릭 후 다시 모달창 닫기
    }
    return(
        <div style={{width:"800px"}}>
            {/* form 태그에서 button을 클릭하면 어떤 버튼이던 submit이 되는데 이를 막기 위한 설정
            대부분 form 태그의 액션으로 보대지 않고 버튼을 클릭했을 때의 이벤트를 사용*/}
            <Form inline onSubmit={(e)=> e.preventDefault()}>
                <FormGroup>
                    <Label>과일 선택</Label>
                    <Input type='select' onChange={change}>
                        <option value="banana">바나나</option>
                        <option value="apple">사과</option>
                        <option value="orange">오렌지</option>
                    </Input>
                </FormGroup>
                {/* 한 칸 띄기 */}
                &nbsp;&nbsp;
                <Button color='primary' onClick={toggle}>전송</Button>
            </Form>
            {/* toggle을 매번 이라와 같이 생성하는 것이 번거로워 매칭만 시켜주는 방식으로 사용하기 위해
            const를 사용 */}
            <Modal isOpen={open} toggle={()=>setOpen(!open)}>
                <ModalHeader toggle={toggle}>
                    전송 여부 확인
                </ModalHeader>
                <ModalBody>
                    {fruit} 선택 <br/> 전송하시겠습니까?
                </ModalBody>
                <ModalFooter>
                    {/* send의 경우에는 백엔드 배운 후 전송 axios를 배울 것 */}
                    <Button color='primary' onClick={send}> 전송 </Button>
                    {/*취소 클릭 시 모달창 닫기 */}
                    <Button color='secondary' onClick={()=>setOpen(false)}> 취소 </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalStrap2;