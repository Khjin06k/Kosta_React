import { useState } from 'react';
import {Button, Fade} from 'reactstrap';

function FadeStrap(){
    const [fadeIn, setFadeIn] = useState(true);
    // 스타일을 한 번에 지정해주기도 함 (너무 길어지기 때문)
    const fadeStyle = {width:"300px", margin:"2px auto", border:"solid gray 1px", padding:"5px"};

    return(
        // CollapseStrap과 유사하지만 차이점이 존재
        // 천천히 펼쳐졌다가 사라지는 것의 차이
        // 가장 큰 차이점은 보이지 않는 경우 영역을 차지하지 않는 Collapse와 달리 Fade의 경우에는 보이지 않아도 영역을 차지함
        <>
            <Button color="success" onClick={()=>setFadeIn(!fadeIn)}> Fade In/Out</Button>
            <Fade in={fadeIn} tag="p" style={fadeStyle}>
            구글 등 해외 플랫폼 사업자가 망 사용료를 내도록 하는 규제가 필요하다는 주장이 제기됐다.
                    유튜브 인기 영향으로 구글의 국내 통신망 트래픽 비중은 28.6%(지난해 4분기 기준)인데 납부하는 망 사용료는 0원이다. 
                    국회 과학기술정보방송통신위원회 소속 김병욱 국민의힘 의원은 "구글이 망 사용에 따른 정당한 대가를 내도록 법적인 제재 방안을 조속히 강구해야 한다"고 26일 밝혔다. 
                    과학기술정보통신부에 따르면 지난해 4분기 기준 해외 사업자의 일평균 국내 트래픽 비중 1위는 구글로 28.6%다. 
                    2위인 넷플릭스(5.5%)보다 5배 이상 많다.
            </Fade>
            <h1> 제목 </h1>
        </>
    )
}

export default FadeStrap;