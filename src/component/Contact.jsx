import Info from './Info';
import Feedback from './Feedback';
import Thank from './Thank';
import Header from '../component/Header';
import HeaderNav from '../component/HeaderNav';

function Contacts() {
    return (
        <div>
            <Header />
            <HeaderNav />
            <Info />
            <Feedback />
            <Thank />
        </div>
    )
};
export default Contacts;