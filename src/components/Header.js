import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, Image, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    
    const dispatch = useDispatch()

    const logoutHandler = () =>{
        dispatch(logout())
    }

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

                            {userInfo ? ( 
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ):(
                            <LinkContainer to="/login">
                                <Nav.Link ><i className="fas fa-user-lock"></i>Login</Nav.Link>
                            </LinkContainer>

                            )}

                            


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
