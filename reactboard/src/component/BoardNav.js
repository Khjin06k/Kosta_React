import {Link} from 'react-router-dom';
import "./Board.css"
const BoardNav = () =>{
    const style = {backgroundColor:"#28a745", width:"100%", position:'fixed', left:0, top:0, zIndex:80};
    
    return(
        <div style={style}>
           <ul className='nav-items'>
            <li className="nav-item">
                <Link to={"/"} id="logo"><i>toto<b>bank</b></i></Link>
            </li>
            <li className="nav-item">
                <Link to={"/1"}>전체 게시판</Link>
            </li>
            <li className="nav-item">
                <Link to={"/register"}>게시글 등록</Link>
            </li>
           </ul>
        </div>
    )
}

export default BoardNav;