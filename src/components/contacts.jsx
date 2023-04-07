import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Weather from './Weather';
import CustomNavbar from './CustomNavbar'
import Footer from './Footer'
import { Container } from 'react-bootstrap';

const Contacts = () => {
    return (
        <Container fluid>
            <CustomNavbar />
            <main>
                <Row className='mt-5'>
                    <Col xs={12} md={8}>
                        <Weather></Weather>
                    </Col>
                    <Col xs={12} md={4}>
                        <aside>
                            <Row className='justify-content-center'>
                                <Col xs={12}>
                                    <img src="https://www.3bmeteo.com/images/promo/luce_meteo_2.jpg" alt="" />
                                </Col>
                                <Col xs={12}>
                                    <img src="https://www.3bmeteo.com/images/promo/shop-3b.jpg" alt="" />
                                </Col>
                            </Row>
                        </aside>
                    </Col>
                    <Row>
                    </Row>
                </Row>
            </main>
            <Footer />
        </Container>
    )
}

export default Contacs;