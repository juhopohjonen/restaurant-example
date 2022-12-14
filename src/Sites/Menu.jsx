import { Col, Row } from "react-bootstrap"
import MenuItem from "../Components/MenuItem"
import menuItems from "../menuItems"

const Menu = () => {
    return (
        <>
            <h1>Our menu</h1>
            <p>Here's our menu.</p>


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
        </>
    )
}

export default Menu