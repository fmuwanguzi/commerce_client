import React from 'react'
import { Navbar, Nav, Container, Row, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand><Image src="https://img.favpng.com/17/15/11/black-white-waves-logo-black-white-waves-png-favpng-SYWjaHVEQd10F8TrSMpS1rgqx.jpg" alt="image" height="30" width="40"/></Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <LinkContainer to="/cart">
                                <Nav.Link><i className="fas fa-cart-arrow-down"></i>Cart</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/login">
                                <Nav.Link ><i className="fas fa-user-lock"></i>Login</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/about">
                                <Nav.Link ><i className="far fa-address-card"></i>About</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
        
    )
}

export default Header
