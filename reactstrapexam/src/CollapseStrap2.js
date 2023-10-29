import { useState } from 'react';
import {Button, CardBody, Card, Collapse} from 'reactstrap';

function CollapseStrap2(){
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("Closed");
    const [idx,setIdx] = useState(0);
    const contents = [
        "아무거나 긴 글씨를 쓰면 되는데, 나는 무엇을 쓰는것이 좋을까 고민을 하다가 현재 일어나고 있는 일을 적고자 한다. 와이파이가 연결이 되기는 하는데 안된다... 분명 와이파이 모형이 끝까지 다 차있는데 줌 연결은 왜 계속 끊기는가... 이정도면 그냥 손으로 가져다가 이어 붙이는 수준,,, (물론 손으로 이어붙이는거 안되는거 알기는 하지만 그래도,..) 이건 좀 많이 너무한 수준이 아닌가 싶은데...", 
        "유선을 사용해야 하려면 연결잭을 사야하는데 얼마 쓰지도 않으려고 사는것도 아깝고,,,", 
        "근데 지금 배고프다... 아까 샐러드 먹었을 때 배 불렀는데 배가 금방 꺼져버렸네,,, 수업이 끝나려면 1시간 20분이나 남았는데,,,"
    ]
    // toggle이 열릴 때 닫힐 때 각각 open, close가 출력 (로그를 봐도 무방)
    const entering = () => {
        console.log("onEntering");
        setStatus("Opening");
        {/* entering 시점에 인덱스를 통해 불러오는 글의 내용을 다르게 설정할 수 있음 */}
        if(idx===contents.length-1) setIdx(0);
        else setIdx(idx+1);
    }
    const entered = () =>{
        console.log("entered");
        setStatus("Opening");
    }
    const exiting = () => {
        console.log("onexiting");
        setStatus("Closed");
    }
    const exited = () =>{
        console.log("exited");
        setStatus("Closed");
    }
    return(
        <div>
            <Button onClick={()=>setOpen(!open)} style={{marginBottom:"10px"}}>Toggle</Button>
            <h5>Current state : {status} </h5>
            {/* 열고 닫을 때마다 아래 4가지를 이용하여 이벤트 설정이 가능함 */}
            <Collapse isOpen={open}
                onEntering={entering}
                onEntered={entered}
                onExiting={exiting}
                onExited={exited}
            >
                <Card>
                    <CardBody>
                        {contents[idx]}
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}

export default CollapseStrap2;