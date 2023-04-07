import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Envelope, Twitter, Linkedin, Github } from 'react-bootstrap-icons';
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <Row>
                <Col xs={12}>
                    <div>
                        <Envelope></Envelope>
                        <Twitter></Twitter>
                        <Linkedin></Linkedin>
                        <Github></Github>
                    </div>
                    <p>Made with ❤️ by Andrea Ragalzi</p>
                    <p>Copyright © {year}</p>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;