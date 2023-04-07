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
                    <div className='mb-3'>
                        <Envelope className='me-3'></Envelope>
                        <Twitter className='me-3'></Twitter>
                        <Linkedin className='me-3'></Linkedin>
                        <Github className='me-3'></Github>
                    </div>
                    <p className='mb-3'>Made with ❤️ by Andrea Ragalzi</p>
                    <p className='mb-3'>Copyright © {year}</p>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;