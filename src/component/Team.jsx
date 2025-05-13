import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Feature.css';
import Header from '../component/Header';
import HeaderNav from '../component/HeaderNav';
import Thank from './Thank';

function Team() {
    return (
        <div>
            <Header />
            <HeaderNav />
            <Container fluid>
                <Row className='team-main'>
                    <Col className='team-in' lg={10}>
                        <p>
                            Our team is a dedicated group of professionals passionate about creating memorable and stress-free wedding experiences.
                            From event planners and decorators to customer support and logistics managers, each member plays a key role in making
                            your special day seamless and elegant.
                        </p>
                        <p>
                            With years of experience in the wedding and event industry, our team works together with creativity, professionalism,
                            and attention to detail. We believe in turning your vision into reality with warmth, care, and precision.
                        </p>
                        <p>
                            We are proud of the passion and dedication each team member brings, ensuring every event is unique and unforgettable.
                        </p>

                    </Col>
                </Row>

            </Container>
            <Thank />


        </div>
    );
};
export default Team;