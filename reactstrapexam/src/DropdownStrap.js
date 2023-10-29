import {useState} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

function DropdownStrap(){
    const [open, setOpen] = useState(false); // dropdown이 기본적으로 열리지 않도록 설정

    return(
        <>
            {/* dropdown의 방향 설정을 변경해 줄 수 있음 
            dropdown안에 dropdown도 가능함*/}
            <ButtonDropdown direction="right" isOpen ={open} toggle={()=>setOpen(!open)}>
                {/* 색상 및 사이즈 지정 가능
                Dropdowntoggle은 버튼
                DropdownItem은 dropdown의 옵션들 */}
                <DropdownToggle caret color="success" size="lg">버튼 Dropdown</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>헤더</DropdownItem>
                    <DropdownItem divider/> {/* 각 항목을 나눠주는 짝대기 */}
                    <DropdownItem disabled>비활성화 버튼</DropdownItem>
                    < a href="http://daum.net">
                        <DropdownItem>다음 사이트로 이동</DropdownItem>
                    </a>
                    <DropdownItem onClick={() => alert('Alert 버튼')}>Alert 버튼</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </>
    )
}

export default DropdownStrap;