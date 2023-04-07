import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={8} lg={6}>
                    <h2>404 - Page not found :(</h2>
                    <Button
                        className='btn ntn-primary'
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        GO HOME
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;