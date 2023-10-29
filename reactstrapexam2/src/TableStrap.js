import {Table} from 'reactstrap';

{/* Table만 컴포넌트로서 대문자로 작성하고 나머지는 소문자로 작성 */}
function TableStrap(){
    return(
        <div>
            {/*striped : 짝수 행의 색이 변경, bordered : 세로선이 만들어짐(기본적으로 가로선이 존재),
            hover : 마우스를 가져다 댄 행의 색이 변경, borderless : 모든 선이 사라짐, size : 크기 변경이 가능, dark : 배경이 흰색이 아닌 검은색으로 변경*/}
            <h3>EXAMPLE</h3>
            <Table hover bordered dark>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Frist Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default TableStrap;