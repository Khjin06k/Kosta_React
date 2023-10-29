import {UncontrolledCarousel} from 'reactstrap';

function CarouselStrap(){
    const items = [
        {
            src:'logo192.png',
            altText:'로고',
            caption:'logo',
            header:'logo'
        },
        {
            src:'logo512.png',
            altText:'로고2',
            caption:'logo2',
            header:'logo2'
        },
        {
            src:'logo192.png',
            altText:'로고3',
            caption:'logo3',
            header:'logo3'
        }
    ]
    return(
        <>{/* 자동으로 옆으로 넘어감, Uncontrolled를 빼면 수동으로도 가능 */}
            <UncontrolledCarousel items={items} style={{width:"100px"}}/>
        </>
    )
}

export default CarouselStrap;