import {Button} from 'reactstrap';
import Swal from 'sweetalert2';

function Sweetalert2Basic(){
    const confirm = () =>{
        Swal.fire(" 삭제").then(result=>{
            console.log(result.value)
        });
    }

    return (
        <div>
            <Button onClick={confirm}>확인</Button>
        </div>
    )
}

export default Sweetalert2Basic;

