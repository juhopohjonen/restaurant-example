import { Container, Navbar, Nav } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to='/'>Restaurant example</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/menu'>Menu</Nav.Link>
                <Nav.Link as={Link} to='/info'>Info</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

            <div style={{ marginTop: '1rem' }}>

                <Container>
                    <Outlet />
                </Container>

            </div>

        </>
    )
}

export default Layout