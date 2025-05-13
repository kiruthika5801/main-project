import { Container } from 'react-bootstrap';
import Blog from './Blog';
import Thank from './Thank';
import Header from '../component/Header';
import HeaderNav from '../component/HeaderNav';

function Blogs() {
    return (
        <div>
            <Container fluid>

                <Header />
                <HeaderNav />
                <Blog />
                <Thank />

            </Container>

        </div>
    )
};
export default Blogs;