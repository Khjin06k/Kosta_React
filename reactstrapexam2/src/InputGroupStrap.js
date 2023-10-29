import {InputGroup, InputGroupAddon, InputGroupText, Input, InputGroupButtonDropdown, DropdownMenu, DropdownItem, Button, DropdownToggle} from 'reactstrap';
import {useState} from 'react';

function InputGroupStrap(){
    const [open, setOpen] = useState(false);
    return(
        <>
        <InputGroup>
        {/* prepend는 앞에 붙는 것 */}
            <InputGroupAddon addonType="prepend"> @ </InputGroupAddon>
            <Input placeholder='username'/>
        </InputGroup>
        <br/>
        <InputGroup>
        {/* GroupAddon은 앞에 /뒤에를 결정해서 고정, Addon */}
        {/* InputGroupText는 InputGroupAddon 안에 Input을 넣기 위해서 사용하는 것으로 사용하지 않으면
        레이아웃이 깨질 수 있음 */}
            <InputGroupAddon addonType='prepend'>
                {/* 입력받는 곳 */}
                <InputGroupText>
                    <Input addon type='checkbox' aria-label='Checkbox for following text input'/>
                </InputGroupText>
            </InputGroupAddon>
            <Input placeholder='Check it out'/>
        </InputGroup>
        <br/>
        <InputGroup>
            <Input placeholder='username'/>
            {/* append는 뒤에 붙는 것 */}
            <InputGroupAddon addonType='append'>@example.com</InputGroupAddon>
        </InputGroup>
        <br/>
        <InputGroup>
            <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
            {/* step을 통해서 숫자 위아래로 증감 버튼을 추가할 수 있으며, 한 단계당 몇개씩 올릴 것인지에 대해 명시 가능*/}
            <Input placeholder='Amount' type='number' step="1"/>
            <InputGroupAddon addonType='append'>.00</InputGroupAddon>
        </InputGroup>
        <br/>
        <InputGroup>
            {/* 드롭다운 버튼 추가도 가능 */}
            <InputGroupButtonDropdown addonType='prepend' isOpen={open} toggle={()=>setOpen(!open)}>
                <DropdownToggle caret>Split outline</DropdownToggle>
                <DropdownMenu>
                    {/* header, 선택 불가, 일반, 구분 */}
                    <DropdownItem header> Header</DropdownItem>
                    <DropdownItem disabled> Action </DropdownItem>
                    <DropdownItem>Another Action </DropdownItem>
                    <DropdownItem divider/>
                </DropdownMenu>
            </InputGroupButtonDropdown>
            <Input/>
        </InputGroup>
        </>
    )
}

export default InputGroupStrap;