import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
// npm install --save bootsrap을 사용해 설치한 부트 스트랩을 가져와서 사용하기 위해 import
import AlertStrap from './AlertStrap';
import ButtonStrap from './ButtonStrap';
import BreadCrumbStrap from './BreadCrumbStrap';
import DropdownStrap from './DropdownStrap';
import ButtonGroupStrap from './ButtonGropStrap';
import CardStrap from './CardStrap';
import CarouselStrap from './CarouselStrap';
import CollapseStrap from './CollapseStrap';
import CollapseStrap2 from './CollapseStrap2';
import FadeStrap from './FadeStrap';
import FormStrap from './FormStrap';

function App() {
  return (
    // Alert/UnconrolledAlert의 차이는 x 버튼의 존재 유무 차이
    <div>

     <FadeStrap/>
     {/* <AlertStrap/>
      <ButtonStrap/>
      <BreadCrumbStrap/>
      <DropdownStrap/>
      <ButtonGroupStrap/>
       <CardStrap/>
      <CarouselStrap/>
      <CollapseStrap/>
      <CollapseStrap2/>
      
  <FormStrap/>*/}
    </div>
  );
}

export default App;
