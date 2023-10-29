import { useState } from "react";
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

function NavbarStrap1(){
    const [open, setOpen] = useState(false);
    const toggle = () =>{
        setOpen(!open);
    }
    return(
        <div style={{width:"500px"}}>
            {/* color는  배경색, light는 글씨색*/}
            {/*expand를 설정하지 않으면 앱에서 나오는 석삼자 모양으로 NavItem들이 보여졌다 들어갔다 함*/}
            <Navbar color="light" light>
                <NavbarBrand href="https://edu.kosta.or.kr/" className="mr-auto"> <b><i>kosta</i></b></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={open} navbar>
                    <Nav navbar  className="ml-auto">
                        <NavItem>
                            <NavLink href="http://naver.com">네이버</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://daum.net">다음</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Option1</DropdownItem>
                                <DropdownItem>Option2</DropdownItem>
                                <DropdownItem>Option3</DropdownItem>
                                <DropdownItem>Option4</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarStrap1;