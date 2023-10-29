import { useState } from 'react';
import { Tooltip } from 'reactstrap';

function TooltipsStrap(){
    const [open, setOpen] = useState(false);

    return(
        <div style={{widt:"500px"}}>
            <p> Somewhere in here is a  
                <span style={{textDecoration:"underline", color:"blue"}} id="tooltip"> tooltips</span>
            </p>
            {/* target : 어디에 붙일건지 결정하는 것으로 id="tootip"인 것에 마우스를 가져다대면 아래 툴팁이 열림
            placement : 상하좌우 다 가능 (글씨가 출력될 방향을 결정)
            클릭이 아니라 자동으로 생기는 것 */}
            <Tooltip placement='bottom' isOpen={open} target="tooltip" toggle={()=>setOpen(!open)}>
                Hello Tootips
            </Tooltip>
        </div>
    )
}

export default TooltipsStrap;