import { useState, useEffect } from "react";
import {Button, Popover, PopoverHeader, PopoverBody, Progress} from 'reactstrap';

function PopoverStrap(){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);

    {/* 처음 화면이 뜨자마자 해야하는 것, 한번만 실행해야 한다는 것 */}
    useEffect(() => {
        plusValue();
    }, [value])

    {/* 1초에 하나씩 상승하도록 설정 */}
    let tvalue = value;
    const plusValue = () =>{
        let timerId = setInterval(()=>{
            tvalue += 1;
            setValue(tvalue);
        })
        setInterval(()=>{
            clearInterval(timerId);
        }, 1000)
    }

    return(
        <div style={{width:"500px"}}>
            <Button onClick={()=>setOpen(!open)} id="Popover1">Launch Popover</Button>
            <Popover placement="bottom" isOpen={open} target="Popover1" toggle={()=>setOpen(!open)}>
                <PopoverHeader> "국내 통신망 제일 많이 쓰는 구글, 사용료는 '0원'" </PopoverHeader>
                <PopoverBody>
                구글 등 해외 플랫폼 사업자가 망 사용료를 내도록 하는 규제가 필요하다는 주장이 제기됐다.
                 유튜브 인기 영향으로 구글의 국내 통신망 트래픽 비중은 28.6%(지난해 4분기 기준)인데 납부하는 망 사용료는 0원이다. 
                 국회 과학기술정보방송통신위원회 소속 김병욱 국민의힘 의원은 "구글이 망 사용에 따른 정당한 대가를 내도록 법적인 제재 방안을 조속히 강구해야 한다"고 26일 밝혔다. 
                 과학기술정보통신부에 따르면 지난해 4분기 기준 해외 사업자의 일평균 국내 트래픽 비중 1위는 구글로 28.6%다. 
                 2위인 넷플릭스(5.5%)보다 5배 이상 많다.
                </PopoverBody>
            </Popover>
            <br/><br/>
            {/* 막대바로 value 값이 표현됨 */}
            <Progress value={value}/>
        </div>
    )
}

export default PopoverStrap;