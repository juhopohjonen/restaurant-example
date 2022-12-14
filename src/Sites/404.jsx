import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Err404 = () => {
    return (
        <>
            <h1>404 - Site not found!</h1>
            <Nav as={Link} to='/'>Navigate to homepage.</Nav>
        </>
    )
}

export default Err404