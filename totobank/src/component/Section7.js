import { Button, UncontrolledCarousel } from "reactstrap";

const Section7 = () =>{
    const items=[
        {
            src:'/img/card-1.png',
            altText:'카드1',
        },
        {
            src:'/img/card-2.png',
            altText:'카드2',
        },
        {
            src:'/img/card-3.png',
            altText:'카드3',
        },
        {
            src:'/img/card-4.png',
            altText:'카드4',
        },
        {
            src:'/img/card-5.png',
            altText:'카드5',
        }
    ]
    return(
        <div style={{width:"100%"}}>
            <div className='componentBox' style={{paddingTop:"10%"}}>
            <span className='L-text'>
                    프렌즈 체크카드<br/>
                    내가 고르는 선택의 즐거움
                </span> <br/>
                <span className="S-text">
                    프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지 원하는 <br/>
                    디자인과 기능을 선택할 수 있습니다.
                </span> <br/>
                <Button color='light' size='md'> 프렌즈 체크카드 &gt;</Button> <br/>
            </div>
            <UncontrolledCarousel items={items}/>
        </div>
        
    );
}

export default Section7;