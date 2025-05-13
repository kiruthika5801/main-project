import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Feature.css';
import Header from '../component/Header';
import HeaderNav from '../component/HeaderNav';
import Thank from './Thank';

function SingleServices() {
    return (
        <div>
            <Header />
            <HeaderNav />
            <Container fluid>
                <Row className='Single-main'>
                    <Col className='Single-in' lg={10}>
                        <p>
                            Choosing the right venue sets the tone for your entire wedding, and at DreamDay Planners, we assist you in selecting the perfect location that matches your style, guest capacity, and budget. Whether it's a grand banquet hall, a serene garden, or a beachside resort, we ensure the space resonates with your vision and provides a magical setting for your big day.
                        </p>
                        <p>
                            Designing a wedding theme is where imagination meets reality. Our creative experts collaborate with you to craft a cohesive and personalized theme — from color palettes and décor elements to lighting and table arrangements — ensuring every detail reflects your unique love story and cultural traditions.
                        </p>
                        <p>
                            Flowers bring life and emotion to weddings, and our floral arrangement services are tailored to enhance the charm of your celebration. We curate everything from elegant bridal bouquets and boutonnieres to eye-catching stage backdrops and mandap decorations, using fresh blooms that align with your theme and preferences.
                        </p>
                        <p>
                            Guest comfort is a priority, and our dedicated coordination team handles everything from invitation management and RSVP tracking to seating arrangements and hospitality logistics. We strive to make each guest feel welcomed and cared for, allowing you to focus on celebrating the moment without any worry.
                        </p>
                        <p>
                            From vibrant pre-wedding functions like haldi and mehendi to formal ceremonies like engagements and receptions, we manage each event with cultural sensitivity and professional precision. Our planners ensure smooth transitions between events, timely execution, and joyful experiences — turning your dreams into cherished memories.
                        </p>



                    </Col>
                </Row>

            </Container>
            <Thank />


        </div>
    );
};
export default SingleServices;