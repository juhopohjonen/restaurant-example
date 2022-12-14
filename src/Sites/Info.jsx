import { Col, Row, Card, ListGroup } from "react-bootstrap"
import phone from '../Images/phone.jpg'

import { BsFillTelephoneFill, BsMailbox } from "react-icons/bs"
import { VscLocation } from 'react-icons/vsc'

const Info = () => {
    return (
        <>
            <h1>Welcome to our restaurant!</h1>
            <p>In our example restaurant, we have the most delicious meals. Our restaurant locates at Esimerkkilänkatu 25, 90570 Oulu. We also offer free coffee to all our customers. </p>

            <Row>


                    <Card style={{ maxWidth: '40rem' }}>
                        <Card.Img variant="top" src={phone} style={{ marginTop: '5px' }} />
                        <Card.Body>
                            <Card.Title>Our contact info</Card.Title>
                            <Card.Text>Open from 8 am to 6 pm</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><BsFillTelephoneFill style={{ marginRight: '5px' }} />  +358451841220</ListGroup.Item>
                            <ListGroup.Item><BsMailbox style={{ marginRight: '5px' }} /> juhopohjonen237@gmail.com</ListGroup.Item>
                            <ListGroup.Item><VscLocation style={{ marginRight: '5px' }} /> Esimerkkilänkatu 25, 90570 Oulu</ListGroup.Item>
                        </ListGroup>

                    </Card>
            </Row>
        </>
    )
}

export default Info