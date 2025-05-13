import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Feature.css';
import Header from '../component/Header';
import HeaderNav from '../component/HeaderNav';
import Thank from './Thank';

function OurServices() {
    return (
        <div>
            <Header />
            <HeaderNav />
            <Container fluid>
                <Row className='OurServices-main'>
                    <Col className='OurServices-in' lg={10}>
                        <p>
                            At DreamDay Planners, we specialize in creating magical wedding experiences tailored to each couple’s unique vision.
                            From the first consultation to the final send-off, we handle every detail with care and creativity.
                        </p>
                        <p>
                            Our services include venue selection, theme design, floral arrangements, and guest coordination.
                            We ensure that your big day runs smoothly, allowing you to enjoy every precious moment.
                        </p>
                        <p>
                            Whether it's a vibrant haldi ceremony, an elegant reception, or a traditional engagement, our team brings your ideas to life
                            with passion and precision.
                        </p>
                        <p>
                            With years of experience in event planning, we understand the importance of cultural values and personal preferences.
                            Our mission is to make your wedding stress-free and unforgettable.
                        </p>
                        <p>
                            Trust us to turn your dreams into a beautifully orchestrated celebration — because your love story deserves the best beginning.
                        </p>



                    </Col>
                </Row>

            </Container>
            <Thank />


        </div>
    );
};
export default OurServices;