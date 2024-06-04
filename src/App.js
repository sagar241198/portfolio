
import 'bootstrap/dist/css/bootstrap.min.css';
import { Conatainer } from './components/generic/containers';
import MainHeader from './components/header/navbar';
import { ContainerWithBackgroundImage } from './screen/styled';
import ManuHeader from './components/header/menu-header';
import MainContentDiv from './screen/contents';

import './App.css';
import About from './screen/contents/about';
import ServiceComp from './screen/contents/service';
import SkillCopmp from './screen/contents/skills';
import ContactCompo from './screen/contents/contact';

function App() {
  return (
    <Conatainer>
      <ContainerWithBackgroundImage>
        <MainHeader />
        <ManuHeader />
      </ContainerWithBackgroundImage>


      {/* about components */}
      <About />

      {/* service components */}
      <ServiceComp />

        {/* skill components */}
      <SkillCopmp />

      {/* Conatact components */}
      <ContactCompo />

      

      

    </Conatainer>
  );
}

export default App;
