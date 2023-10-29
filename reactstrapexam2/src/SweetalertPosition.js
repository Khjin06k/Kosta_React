import {Button} from 'reactstrap';
import Swal from 'sweetalert2';

function SweetalertPosition(){
    const openAlert = (flag, position) =>{
        {/* 
        postion : 위치 지정
        icon : alert 창이 뜰 때 나오는 아이콘
        title : alert 창 내용
        timer : alert 창의 띄우는 시간
        showCormButton : 버튼을 보이지 않도록 설정 */}
        Swal.fire({
            position:position,
            icon : 'success',
            title:flag+'되었습니다',
            showConfirmButton:false,
            timer:50000
        })
    }

    return(
        <div>
            <Button onClick={() => openAlert('저장', 'center')}> 저장 </Button>
            <Button onClick={() => openAlert('취소', 'bottom-end')}> 취소 </Button>
        </div>
    )
}

export default SweetalertPosition;