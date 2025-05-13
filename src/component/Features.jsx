import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Feature.css';
import Header from '../component/Header';
import HeaderNav from '../component/HeaderNav';
import Thank from './Thank';

function Features() {
    return (
        <div>
            <Header />
            <HeaderNav />
            <Container fluid>
                <Row className='feature-main'>
                    <Col className='feature-in' lg={10}>
                        <p>
                            Discover everything you need to plan the perfect wedding — all in one place. From elegant venues and creative decorators to stunning bridal wear and stylish groom attire, our platform brings you a curated selection of top wedding essentials.
                        </p>

                        <p>
                            Explore a wide range of personalized invitation designs, photography packages, and beauty services to match your theme and budget. Whether you're organizing a grand reception, traditional haldi, mehendi, or birthday celebration, we’ve got it all covered.
                        </p>

                        <p>
                            Manage your guest list, track RSVPs, and book vendors with just a few clicks. Our user-friendly dashboard helps you stay organized and on schedule, making wedding planning stress-free and enjoyable.
                        </p>

                        <p>
                            With expert support, trending ideas, and end-to-end coordination, we ensure that every moment of your special day is memorable, magical, and perfectly planned.
                        </p>


                    </Col>
                </Row>

            </Container>
            <Thank />


        </div>
    );
};
export default Features;