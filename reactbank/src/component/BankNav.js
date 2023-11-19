import { useState } from 'react';
import {Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Nav, Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const BankNav = () =>{
    const [open, setOpen] = useState(false);
    const toggle = () =>{
        setOpen(!open);
    }
    
    //const userId = useSelector(state => state.id); // redux state에 회원이 있는지 가져오기
    const user = useSelector(state=>state.persistedReducer); // 객체가 싸여있기 때문에 한 번 벗겨내서 user를 가져옴
    console.log('user:', user);

    return(
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="https://edu.kosta.or.kr/" className="mr-auto"> <b><i>kostaBank</i></b></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={open} navbar>
                    <Nav navbar  className="ml-auto">
                        <NavItem>
                            {user.id}
                        </NavItem>
                        <NavItem>
                            {user === null || user.id ==='' ? // 처음 가져올 때에는 user가 존재하지 않기 때문에 null에 대한 처리 진행
                            <NavLink href="/login">로그인</NavLink> :
                            <NavLink href="/logout">로그아웃</NavLink>
                            }
                        </NavItem>
                        <NavItem>
                            <NavLink href="/join">회원가입</NavLink>
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