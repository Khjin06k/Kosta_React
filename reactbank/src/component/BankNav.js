import { useState } from 'react';
import {Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Nav, Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';

const BankNav = () =>{
    const [open, setOpen] = useState(false);
    const toggle = () =>{
        setOpen(!open);
    }
    return(
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="https://edu.kosta.or.kr/" className="mr-auto"> <b><i>kostaBank</i></b></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={open} navbar>
                    <Nav navbar  className="ml-auto">
                        <NavItem>
                            <NavLink href="#">로그인</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">회원가입</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                메뉴
                            </DropdownToggle>
                            <DropdownMenu right>
                                {/* Route를 통해 설정한 path와 연결 */}
                                <Link to="/">
                                <DropdownItem >계좌개설</DropdownItem></Link>
                                <Link to="/accountInfo">
                                    <DropdownItem>계좌조회</DropdownItem>
                                </Link>
                                <Link to="/deposit">
                                    <DropdownItem>입금</DropdownItem>
                                </Link>
                                <Link to="withdraw">
                                    <DropdownItem>출금</DropdownItem>
                                </Link>
                                <Link to="allAccountInfo">
                                    <DropdownItem>전체계좌조회</DropdownItem>
                                </Link>
                                
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default BankNav;