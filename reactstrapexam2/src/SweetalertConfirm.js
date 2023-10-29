import Swal from 'sweetalert2';
import {Button} from 'reactstrap';

function SweetalertConfirm(){
    {/* showCancelButton은 기본값이 false이기 때문에 값을 지정해 줘야 함 */}
    const deleteAlert = () =>{
        Swal.fire({
            title : '정말 삭제하시겠습니까?',
            icon : 'question',
            showCancelButton : true,
            confirmButtonColor : '#444444',
            cancelButtonColor : "#888888",
            confirmButtonText : '예',
            cancelButtonText : '아니요'
        }).then((res)=>{
            // 여기서 cancel/confirm의 결과가 돌아옴
            if(res.value){
                document.getElementById("deleteId").remove();
                Swal.fire('Deleted', '삭제 완료', 'succedss') // Swal을 한 번 더 추가, 기본 alert 창으로 제목/내용/() 순서로 설정
            }
        })
    }
    return(
        <div>
            <h1 id="deleteId"> 삭제 대상 </h1>
            <Button onClick={deleteAlert}> 츼소 </Button>
        </div>
    )
}

export default SweetalertConfirm;