import { Card, Col, Container, Grid, Row } from "react-bootstrap"
import MenuItem from "../Components/MenuItem"
import menuItems from "../menuItems"

import { BsFillTelephoneFill, BsMailbox } from 'react-icons/bs'

const Index = () => {
    return (
        <>
            <h1>Welcome to this site!</h1>
            <p>This site is an example of a restaurant's website. Our restaurant is good, and there's good food. We have a long history as restauranters. The location of our restaurant is accessible, and you can come by bike or car. </p>

            <h2>Our recommendations</h2>

            <Row style={{ marginTop: '-10px' }}>
                {menuItems.map(item => {
                    return (
                        <Col sm key={item.title}>
                            <MenuItem
                                {...item}
                                addCss={{ marginTop: '1rem' }}
                            />
                        </Col>
                    )
                })}
            </Row>

            <h3 style={{ marginTop: '15px', marginBottom: '10px' }}>Anything to ask?</h3>
            <p>
                <BsFillTelephoneFill style={{ marginRight: '5px' }} />  +358451841220
                <br style={{ marginBottom: '3px' }} />
                <BsMailbox style={{ marginRight: '5px' }} />  juhopohjonen237@gmail.com
            </p>

        </>
    )
}

export default Index