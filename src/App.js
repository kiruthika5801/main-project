
import Header from './component/Header';
import "../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderNav from './component/HeaderNav';
import Main from './component/Main';
import Green from './component/Green';
import Welcome from './component/Welcome';
import About from './component/About';
import Box from './component/Box';
import Shop from './component/Shop';
import Inspiration from './component/Inspiration';
import Section from './component/Section';
import Blog from './component/Blog';
import Wedding from './component/Wedding';
import Prices from './component/Prices';
import Updates from './component/Updates';
import Picture from './component/Picture';
import Feedback from './component/Feedback';
import Info from './component/Info';
import Thank from './component/Thank';


function App() {
  return (
    <div>
      <Header/>
      <HeaderNav/>
      <Main/>
      <Green/>
      <Welcome/>
      <About/>
      <Box/>
      <Shop/>
      <Inspiration/>
      <Section/>
      <Blog/>
      <Wedding/>
      <Prices/>
      <Updates/>
      <Picture/>
      <Feedback/>
      <Info/> 
      <Thank/>
    </div>
  );
}

export default App;
