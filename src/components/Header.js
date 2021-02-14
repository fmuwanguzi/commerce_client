import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                
                    <Navbar.Brand href="/">Image will be placed here</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/cart"><i className="fas fa-cart-arrow-down"></i>Cart</Nav.Link>
                        <Nav.Link href="/login"><i className="fas fa-user-lock"></i>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
        
    )
}

export default Header
