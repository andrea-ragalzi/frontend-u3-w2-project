import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';
import { NavLink, useLocation } from 'react-router-dom'

const CustomNavbar = () => {
    const location = useLocation();
    return (
        <header>
            <Row>
                <Col xs={12}>
                    <Navbar bg="light" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="/">TheStorm</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <NavLink
                                        to="/"
                                        className={
                                            location.pathname === '/'
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        className={
                                            location.pathname === '/'
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        About Us
                                    </NavLink>
                                    <NavLink
                                        to="/contacts"
                                        className={
                                            location.pathname === '/'
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        Contacs
                                    </NavLink>
                                </Nav>
                                <SearchBar></SearchBar>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </header>
    )
}

export default CustomNavbar;