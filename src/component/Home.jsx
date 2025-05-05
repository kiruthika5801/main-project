import Main from './Main';
import Green from './Green';
import Welcome from './Welcome';
import About from './About';
import Box from './Box';
import Shop from './Shop';
import Inspiration from './Inspiration';
import Section from './Section';
import Blog from './Blog';
import Wedding from './Wedding';
import Prices from './Prices';
import Updates from './Updates';
import Picture from './Picture';
import Feedback from './Feedback';
import Info from './Info';
import Thank from './Thank';
import Header from '../component/Header';
import HeaderNav from '../component/HeaderNav';



function Home() {
    return (
        <div>
            <Header />
            <HeaderNav />
            <Main />
            <Green />
            <Welcome />
            <About />
            <Box />
            <Shop />
            <Inspiration />
            <Section />
            <Blog />
            <Wedding />
            <Prices />
            <Updates />
            <Picture />
            <Feedback />
            <Info />
            <Thank />


        </div>
    )
};
export default Home;