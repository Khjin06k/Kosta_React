import {Link} from 'react-router-dom';
import "./Header.css"
const Header = () =>{
    const style = {backgroundColor:"white", width:"100%", position:'fixed', left:0, top:0, zIndex:80};
    
    return(
        <div style={style}>
           <ul className='nav-items'>
            <li className="nav-item">
                <Link to={"/"} id="logo"><i>toto<b>bank</b></i></Link>
            </li>
            <li className="nav-item">
                <Link to={"/makeAccount"}>계좌개설</Link>
            </li>
            <li className="nav-item">
                <Link to={"/deposit"}>입금</Link>
            </li>
            <li className="nav-item">
                <Link to={"/withdraw"}>출금</Link>
            </li>
            <li className="nav-item">
                <Link to={"/accountInfo"}>계좌조회</Link>
            </li>
            <li className="nav-item">
                <Link to={"/allAccountInfo"}>전체계좌조회</Link>
            </li>
           </ul>
        </div>
    )
}

export default Header;