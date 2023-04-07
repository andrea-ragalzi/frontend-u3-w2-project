import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';;

const Contacts = () => {
    return (
        <>
            <CustomNavbar />
            <main>
                <Row className='m-5'>
                    <Col xs={12} md={8}>
                        <h2>Contacts</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero facere aliquam ut asperiores aspernatur itaque accusantium quis mollitia quod quos vel et porro commodi eos tempora, exercitationem, minima atque aperiam.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, voluptate sequi expedita quisquam cupiditate nam itaque ratione iusto? Corporis natus rerum veritatis! Enim recusandae, quo temporibus illum in unde consequatur.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus illo quos, ducimus animi accusamus consequatur id quas corrupti perferendis numquam laboriosam iusto voluptatum amet quam exercitationem deserunt. Consectetur, eum possimus.</p>
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
        </>
    )
}

export default Contacts;