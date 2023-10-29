import { useState } from 'react';
import {Button, ButtonDropdown, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

function ButtonGroupStrap(){ // 버튼을 그룹지어 사용 가능
    const [number, setNumber] = useState(0);
    const [open, setOpen] = useState(false);
    return(
        <> {/* 기본은 가로, vertical 지정 시 세로로 지정 */}
            <ButtonGroup vertical>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <br/><br/>

            {/* 페이징 처리와 같은 그룹핑 가능 */}
            <ButtonGroup>
                <Button>&lt;</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
                <Button>&gt;</Button>
            </ButtonGroup>
            <br/><br/>

            {/* 플러스 마이너스 숫자 업다운 */}
            <ButtonGroup>
                <Button onClick={()=>setNumber(number-1)}>-</Button>
                <Button disabled>{number}</Button>
                <Button onClick={()=>setNumber(number+1)}>+</Button>
            </ButtonGroup>
            <br/><br/>

            {/* 버튼 안에 드랍 다운이 포함될 수 있음 */}
            <ButtonGroup>
                <Button></Button>
                <Button></Button>
                <ButtonDropdown direction="right" isOpen={open} toggle={() => setOpen(!open)}>
                    <DropdownToggle caret>
                        선택
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>3</DropdownItem>
                        <DropdownItem>4</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>

            </ButtonGroup>
        </>
    )
}

export default ButtonGroupStrap;