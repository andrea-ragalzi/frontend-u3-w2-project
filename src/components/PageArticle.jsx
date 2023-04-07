import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticleBig from './ArticleBig';
import CustomNavbar from './CustomNavbar'
import Footer from './Footer'
import { Container } from 'react-bootstrap';

const PageArticle = () => {
    return (
        <Container fluid>
            <CustomNavbar />
            <main>
                <Row>
                    <Col xs={12} md={8}>
                        <ArticleBig></ArticleBig>
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
                </Row>
            </main>
            <Footer />
        </Container>
    )
}

export default PageArticle;