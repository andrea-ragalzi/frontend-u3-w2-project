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
                    <Col xs={12} md={6}>
                        <ArticleBig></ArticleBig>
                    </Col>
                    <Col xs={12} md={6}>
                        <aside>
                            <h1>Lorem</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta illo distinctio placeat alias harum odit magnam tenetur atque nemo eum autem natus eos praesentium commodi obcaecati neque, necessitatibus est doloremque!</p>
                        </aside>
                    </Col>
                </Row>
            </main>
            <Footer />
        </Container>
    )
}

export default PageArticle;